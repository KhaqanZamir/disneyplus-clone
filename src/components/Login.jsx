import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Cta_Logos from '../assets/images/cta-logo-one.svg';
import Cta_Logos_2 from '../assets/images/cta-logo-two.png';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserLoginDetails } from '../features/user/userSlice';
import EyeIcon from '../assets/images/eye-icon.svg';
import EyeCloseIcon from '../assets/images/close-eye.svg';

export default function Login() {

  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRPassword, setShowRPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuth = () => {
    auth.signInWithPopup(provider).then((result) => {
      setUser(result.user);
      navigate('/home', { replace: true });
    }).catch((error) => {
      alert(error.message);
    });
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

  return (
    <div className='login-wrapper'>
      <div className='login-section'>
        <img className='block' src={Cta_Logos} alt="CTAlogos1" />
        <button className='bg-blue text-white my-3 py-4 tracking-[1.5px] rounded hover:bg-blue-1' onClick={() => setShow(!show)}>
          GET ALL THERE
        </button>
        <p className='text-white text-xs tracking-[1.5px] font-medium mb-6'>
          Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney + Description. As of 03/26/21, the price of Disney + and the Disney bundle will increase by $1.
        </p>
        <img src={Cta_Logos_2} alt="CTALogos2" />
      </div>
      {
        show ? <div className='absolute w-[50%] min-h-[50%] bg-black bg-opacity-90 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll overflow-x-hidden'>
          <div className='absolute top-5 right-5 cursor-pointer' onClick={() => setShow(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <h3 className='text-white tracking-[1.5px] font-bold text-2xl mt-5'>SIGN UP</h3>
          <div className='flex flex-wrap justify-center w-full px-5 md:px-10 my-5 gap-5'>
            <input className='w-full md:w-[60%] bg-transparent border-2 border-white leading-10 px-3 rounded' type={'email'} placeholder='Email' />
            <div className='relative w-full md:w-[60%]'>
              <input className='w-full bg-transparent border-2 border-white leading-10 px-3 rounded' type={showPassword ? 'text' : 'password'} placeholder='Password'/>
              <img className='absolute top-[50%] right-3 translate-y-[-50%] cursor-pointer' onClick={()=>setShowPassword(!showPassword)} src={showPassword ? EyeCloseIcon : EyeIcon} alt='' />
            </div>
            <div className='relative w-full md:w-[60%]'>
              <input className='w-full bg-transparent border-2 border-white leading-10 px-3 rounded' type={showRPassword ? 'text' : 'password'} placeholder='Retype Password'/>
              <img className='absolute top-[50%] right-3 translate-y-[-50%] cursor-pointer' onClick={()=>setShowRPassword(!showRPassword)} src={showRPassword ? EyeCloseIcon : EyeIcon} alt='' />
            </div>
            <div className='w-full md:w-[60%] flex flex-wrap align-middle justify-center gap-5'>
              <button className='w-[45%] bg-blue text-white my-3 py-4 tracking-[1.5px] text-base rounded hover:bg-blue-1'>
                SIGN UP
              </button>
              <button className='w-[45%] bg-white text-black my-3 py-4 tracking-[1.5px] text-base rounded border border-white' onClick={handleAuth}>
                GOOGLE
              </button>
            </div>
          </div>
        </div> : null
      }
    </div>
  )
}
