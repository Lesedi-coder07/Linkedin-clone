import React from 'react';
import { useState } from 'react';
import './Feed.css'
import InputOption from './InputOption';
import ImgIcon from './icons/image.png'
import CalenderIcon from './icons/calendar.png'
import ArticleIcon from './icons/newspaper.png'
import Post from './Post';
import { useEffect } from 'react';
import { db } from './firebase';

function Feed(props) {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState([]);
    useEffect( () => {
     db.collection('posts').onSnapshot(snapshopt => {
        setPosts(snapshot.docs.map(doc => (
             {
                id: doc.id,
                data: doc.data(),
             } 
        )))
     })
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            Name: 'Dave Rammutla',
            Desc: 'Senior Developer',
            Message: input,
        })
    }
    return (
        <div className='feed'>
            <div className='feed-input-container'>
                <div className='feed-input'>
                    <form>
                        <input type='text'placeholder='Write a Post' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className='feed-input-options'>
                
                <InputOption icon={ImgIcon} title='Media' width={'40px'} />
                <InputOption icon={CalenderIcon} title='Event' width={'40px'}  />
                <InputOption icon={ArticleIcon} title='Write Article' width={'40px'}  />
                </div>
            </div>
            {posts.map((post) => {
                    <Post />
                })}

            <Post message={'I love hotdogs, but only in autumn.'} />
        </div>
    );
}

export default Feed;