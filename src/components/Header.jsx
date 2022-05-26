import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import { faBars, faFilm, faHouse, faMagnifyingGlass, faPlus, faStar, faTv, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState} from '../features/user/userSlice';

export default function Header() {

    const [toggle, setToggle] = useState(false);

    window.addEventListener('resize', () => {
        if(window.innerWidth > 950){
            setToggle(false)
        }
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleAuth = () => {
        if(!userName){
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user);
                navigate('/home', {replace: true});
            }).catch((error) => {
                alert(error.message);
            });
        }else if(userName){
            auth.signOut().then(() => {
                dispatch(setSignOutState());
                navigate('/', {replace: true});
            }).catch((error) => {
                alert(error.message);
            });
        }
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }

    // useEffect(() => {
    //   auth.onAuthStateChanged( async (user) => {
    //       if(user){
    //           setUser(user);
    //           navigate('/home');
    //       }
    //   })
    // }, [userName])
    

  return (
    <div className='w-full bg-black-1 fixed z-10'>
        <div className='container mx-auto w-full'>
            <div className='flex justify-between align-middle w-full bg-black-1 py-4'>
                <img className='w-[70px] md:w-[100px]' src={Logo} alt="Logo" />
                <div className='flex flex-1 align-middle'>
                    { toggle === false ? <button  className='navToggleBtn' onClick={() => setToggle(true)}><FontAwesomeIcon icon={faBars}/></button> : null }
                    { userName ? <ul className='navMenu'>
                        <li className=''><FontAwesomeIcon className='mr-2' icon={faHouse} /><span>HOME</span></li>
                        <li className=''><FontAwesomeIcon className='mr-2' icon={faMagnifyingGlass} /><span>SEARCH</span></li>
                        <li className=''><FontAwesomeIcon className='mr-2' icon={faPlus} /><span>WATCHLIST</span></li>
                        <li className=''><FontAwesomeIcon className='mr-2' icon={faStar} /><span>ORIGINALS</span></li>
                        <li className=''><FontAwesomeIcon className='mr-2' icon={faFilm} /><span>MOVIES</span></li>
                        <li className=''><FontAwesomeIcon className='mr-2' icon={faTv} /><span>SERIES</span></li>
                    </ul> : null
                    }
                    { userName ? 
                        <div className='dropdown ml-auto'>
                            <img className='navLoginBtn dropBtn rounded-[50%] w-[60px]' src={userPhoto} alt="UserProfile" />
                            <div className="dropdown-content">
                                <p>Settings</p>
                                <p onClick={handleAuth}>Sign out</p>
                            </div>
                        </div> :
                        <button className='navLoginBtn text-white border border-white tracking-[1.5px] rounded py-1 px-8 ml-auto' onClick={handleAuth}>LOGIN</button>
                    }
                </div>
            </div>
        </div>
        {
            toggle ? <div className='navModal'>
                <button onClick={() => setToggle(false)}>
                    <FontAwesomeIcon className='text-white text-2xl top-6 right-5 absolute' icon={faXmark} />
                </button>
                { userName ? 
                    <ul className='navModalMenu'>
                        <li className=''><FontAwesomeIcon className='mr-3' icon={faHouse} /><span>HOME</span></li>
                        <li className=''><FontAwesomeIcon className='mr-3' icon={faMagnifyingGlass} /><span>SEARCH</span></li>
                        <li className=''><FontAwesomeIcon className='mr-3' icon={faPlus} /><span>WATCHLIST</span></li>
                        <li className=''><FontAwesomeIcon className='mr-3' icon={faStar} /><span>ORIGINALS</span></li>
                        <li className=''><FontAwesomeIcon className='mr-3' icon={faFilm} /><span>MOVIES</span></li>
                        <li className=''><FontAwesomeIcon className='mr-3' icon={faTv} /><span>SERIES</span></li>
                        <img className='rounded-[50%] w-[60px]' src={userPhoto} alt="UserProfile" />
                    </ul>
                    :
                    <button className='text-white border border-white tracking-[1.5px] rounded py-2 px-5 absolute top-20 left-5' onClick={handleAuth}>LOGIN</button>
                }
            </div> : null
        }
    </div>
  )
}
