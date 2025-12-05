import React from 'react'
import './Header.css'
import logo from './img/f19bb147648f66e99b327ef65f5be67c'

function header() {
  return (
    <div className='header'>
        <img className='header__logo' src={logo} alt='Amazon Logo'></img>
    
        <div className='header__search'>
            <input className='header__searchInput' type='text'/>
            {/*Search Logo */}
        </div>

        <div className='header__nav'>
            <div className='header__option'>

            </div>

            <div className='header__option'>
                
            </div>

            <div className='header__option'>
                
            </div>
        </div>


    </div>
  )
}

export default header