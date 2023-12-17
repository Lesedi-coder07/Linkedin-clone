import React from 'react';
import './Header.css'
import HeaderOption from './headerOption';
import iconSearch from './please.png'
import Logo from './logo.png'
import MyNet from './networkI.png'
import Home from './homeI.svg'
import briefCase from './brief.svg';
import text from './text2.png';
import noti from './noti.svg'

function Header() {
    return (
      <div className='Header'>
           <div className='header-left'>
             {/* <img src='sss.svg' alt='This is supposed to show'/> */}
             
             <  img src={Logo} className='logo'></img>

             <div className='header-search'>
                <img src={iconSearch} className='SearchIcon' width={'20px'} />
                <input type='text'  />
             </div>

        </div>
           <div className='header-right'>
            <HeaderOption icon={Home} title={'Home'} className='nav-item' />
            <HeaderOption icon={MyNet} title={'My Network'} className='nav-item' />
            <HeaderOption icon={briefCase} title={'Jobs'} className='nav-item' />
            <HeaderOption icon={text} title={'Messaging'} className='nav-item'/>

            <HeaderOption icon={noti} title={'Notifications'} className='nav-item' />
            <HeaderOption av='Lesedi' className='userIcon' />

            
           </div>
        </div>
    );
}

export default Header;