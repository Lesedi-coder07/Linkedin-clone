import React from 'react';
import './InputOption.css';
function InputOption({icon, title, width}) {
    return (
        <div  className='InputOption'>
            <img src={icon} width={width} />
            <p>{title}</p>
        </div>
    );
}

export default InputOption;