import React, { useState } from 'react';
import Av from './Av';
import './Post.css'
import InputOption from './InputOption';
import LikeBtn from './icons/like.png';
import LikedBtn from './icons/heart.png';
import commentIcon from './icons/chat.png';
import shareIcon from './icons/send.png'

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
            <div className='post-body'>
                <p>{message}</p>
            </div>

            <div className='post-buttons'>
                <InputOption icon={LikeBtn} title={'Like'} width={'20px'} />
                <InputOption icon={commentIcon} title={'Comment'} width={'20px'} />
                <InputOption icon={shareIcon} title={'Share'} width={'20px'} />
            </div>
        </div>
    );
}

export default Post;