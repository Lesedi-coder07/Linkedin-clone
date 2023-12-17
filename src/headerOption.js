import React from 'react';
import './headerOption.css'

function HeaderOption({title, icon, cl, av}) {
    return (
        <div className='HeaderOption'>
            <img src={icon} width={'20px'} />
            {av && (
              <img className='Iconu' width={'40px'} src='https://media.licdn.com/dms/image/D4D03AQGDBeYsLw1C5w/profile-displayphoto-shrink_800_800/0/1676317463436?e=1707350400&v=beta&t=ylXKFGB2KR-vGk9SjLbxwXZn_1gyO5ksGDUM1huqGKE'/>
            )}
            <p>{title }</p>
        </div>
    );
}

export default HeaderOption;