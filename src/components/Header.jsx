import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg';
import { faBars, faFilm, faHouse, faMagnifyingGlass, faPlus, faStar, faTv, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth, provider } from '../firebase';

export default function Header() {

    const [toggle, setToggle] = useState(false);

    window.addEventListener('resize', () => {
        if(window.innerWidth > 950){
            setToggle(false)
        }
    })

    const handleAuth = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result);
        }).catch((error) => {
            alert(error.message);
        });
    }

  return (
    <div className='w-full bg-black-1 fixed z-10'>
        <div className='container mx-auto w-full'>
            <div className='flex justify-between align-middle w-full bg-black-1 py-4'>
                <img className='w-[70px] md:w-[100px]' src={Logo} alt="Logo" />
                <div className='flex flex-1 align-middle'>
                    { toggle === false ? <button  className='navToggleBtn' onClick={() => setToggle(true)}><FontAwesomeIcon icon={faBars}/></button> : null }
                    <ul className='navMenu'>
                        <li className=''><FontAwesomeIcon className='mr-1' icon={faHouse} /><span>HOME</span></li>
                        <li className=''><FontAwesomeIcon className='mr-1' icon={faMagnifyingGlass} /><span>SEARCH</span></li>
                        <li className=''><FontAwesomeIcon className='mr-1' icon={faPlus} /><span>WATCHLIST</span></li>
                        <li className=''><FontAwesomeIcon className='mr-1' icon={faStar} /><span>ORIGINALS</span></li>
                        <li className=''><FontAwesomeIcon className='mr-1' icon={faFilm} /><span>MOVIES</span></li>
                        <li className=''><FontAwesomeIcon className='mr-1' icon={faTv} /><span>SERIES</span></li>
                    </ul>
                    <button className='navLoginBtn text-white border border-white tracking-[1.5px] rounded py-1 px-8 ml-auto' onClick={handleAuth}>LOGIN</button>
                </div>
            </div>
        </div>
        {
            toggle ? <div className='navModal'>
                <button onClick={() => setToggle(false)}>
                    <FontAwesomeIcon className='text-white text-2xl top-6 right-5 absolute' icon={faXmark} />
                </button>
                <ul className='navModalMenu'>
                    <li className=''><FontAwesomeIcon className='mr-2' icon={faHouse} /><span>HOME</span></li>
                    <li className=''><FontAwesomeIcon className='mr-2' icon={faMagnifyingGlass} /><span>SEARCH</span></li>
                    <li className=''><FontAwesomeIcon className='mr-2' icon={faPlus} /><span>WATCHLIST</span></li>
                    <li className=''><FontAwesomeIcon className='mr-2' icon={faStar} /><span>ORIGINALS</span></li>
                    <li className=''><FontAwesomeIcon className='mr-2' icon={faFilm} /><span>MOVIES</span></li>
                    <li className=''><FontAwesomeIcon className='mr-2' icon={faTv} /><span>SERIES</span></li>
                    <button className='text-white border border-white tracking-[1.5px] rounded py-1 px-8 mt-5' onClick={handleAuth}>LOGIN</button>
                </ul>
            </div> : null
        }
    </div>
  )
}
