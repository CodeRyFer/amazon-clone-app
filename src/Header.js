import React from 'react'
import './Header.css'
import logo from './img/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket}, dispatch] = useStateValue();
    return (
     <div className='header'>
        <Link to="/">
         <img className='header__logo' src={logo} alt='Amazon Logo'></img>
        </Link>
         <div className='header__deliveryLocation'>
             <LocationOnOutlinedIcon className='header__locationIcon'></LocationOnOutlinedIcon>
             <div className='header__locationText'>
                 <span className='header__locationLineOne'>Delivering to Bloomington 61704</span>
                 <span className='header__locationLineTwo'>Update Location</span>
             </div>
         </div>
     
         <div className='header__search'>
             <input className='header__searchInput' type='text'/>
             <SearchIcon className='header__searchIcon'></SearchIcon>
         </div>
    
         <div className='header__nav'>
             <div className='header__option'>
                 <span className='header__optionLineOne'>Hello</span>
                 <span className='header__optionLineTwo'>Sign in</span>
             </div>
    
             <div className='header__option'>
                 <span className='header__optionLineOne'>Returns</span>
                 <span className='header__optionLineTwo'>& Orders</span>
             </div>
    
             <div className='header__option'>
                 <span className='header__optionLineOne'>Your</span>
                 <span className='header__optionLineTwo'>Prime</span>
             </div>
             
             <Link to='/checkout'>
             <div className='header__optionBasket'>
                 <ShoppingCartOutlinedIcon />
                 <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
             </div>
             </Link>
         </div>
    
    
     </div>
    )
}

export default Header