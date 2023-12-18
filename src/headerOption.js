import React from 'react';
import './headerOption.css'
import Av from './Av';

function HeaderOption({title, icon, cl, av}) {
    return (
        <div className='HeaderOption'>
            <img src={icon} width={'20px'} />
            {av && (
              <Av className={'Iconu'} />
            )}
            <p>{title }</p>
        </div>
    );
}

export default HeaderOption;