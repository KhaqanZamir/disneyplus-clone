import React from 'react';
import Cta_Logos from '../assets/images/cta-logo-one.svg';
import Cta_Logos_2 from '../assets/images/cta-logo-two.png';

export default function Login() {
  return (
    <div className='login-wrapper'>
        <div className='login-section'>
          <img className='block' src={Cta_Logos} alt="CTAlogos1" />
          <button className='bg-blue text-white my-3 py-4 tracking-[1.5px] rounded hover:bg-blue-1'>GET ALL THERE</button>
          <p className='text-white text-xs tracking-[1.5px] font-medium mb-6'>
            Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney + Description. As of 03/26/21, the price of Disney + and the Disney bundle will increase by $1.
          </p>
          <img src={Cta_Logos_2} alt="CTALogos2" />
        </div>
    </div>
  )
}
