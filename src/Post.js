import React from 'react';
import Av from './Av';

function Post({name, desc, message, photoUrl}) {
    return (
        <div className='post'>
            <div className='post-header'>
                <Av />
                <div className='post-info'>
                    <h2>Lesedi Rammutla</h2>
                    <p>Description</p>
                </div>
            </div>
        </div>
    );
}

export default Post;