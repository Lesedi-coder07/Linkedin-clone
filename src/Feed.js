import React from 'react';
import './Feed.css'
import InputOption from './InputOption';
import ImgIcon from './icons/image.png'
import CalenderIcon from './icons/calendar.png'
import ArticleIcon from './icons/newspaper.png'

function Feed(props) {
    return (
        <div className='feed'>
            <div className='feed-input-container'>
                <div className='feed-input'>
                    <form>
                        <input type='text'placeholder='Write a Post' />
                        <button type='submit'>Send</button>
                    </form>
                </div>

                <div className='feed-input-options'>
                <InputOption icon={ImgIcon} title='Media' />
                <InputOption icon={CalenderIcon} title='Event' />
                <InputOption icon={ArticleIcon} title='Write Article' />
                </div>
            </div>
        </div>
    );
}

export default Feed;