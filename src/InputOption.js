import React from 'react';
import './InputOption.css';
function InputOption({icon, title}) {
    return (
        <div  className='InputOption'>
            <img src={icon} width='40px' />
            <p>{title}</p>
        </div>
    );
}

export default InputOption;