import { Avatar } from '@mui/material';
import React from 'react';
import Av from './Av';

import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img src='https://i.pinimg.com/originals/41/82/a9/4182a9dd330c6442c4a1fbc78274d838.png' />
                <Av className='sidebar-avatar'/>
                <h2 >Lesedi Rammutla</h2>
                <h4>lesedideveloper@gmail.com</h4>
            </div>

             <div className='sidebar-stats'>
                <div className='sidebar-stat'>
                  <p>
                    Who viewed you:
                  </p>
                  <p className='stat-number'>20000</p>
                </div>

                <div className='sidebar-stat'>
                      <p>Views on post:</p>
                      <p className='stat-number'>2981</p>
                    </div>
             </div>

             <div className='sidebar-bottom'>
                <p>Recent</p>
             </div>
            
        </div>
    );
}

export default Sidebar;