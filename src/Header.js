import React from 'react'
import './Header.css'
import logo from './logo.png';

function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src={logo} alt='Amazon Logo'></img>
    
        <div className='header__search'>
            <input className='header__searchInput' type='text'/>
            {/*Search Logo */}
        </div>

        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello</span>
                <span className='header__optionLineOne'>Sign in</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineOne'>& Orders</span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineOne'>Prime</span>
            </div>
        </div>


    </div>
  )
}

export default Header