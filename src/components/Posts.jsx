import { useState, useEffect } from 'react';
import '../App.css'


const APIURL = `https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D`;

export default function Posts() {
    const [posts, setPosts] = useState([]);

const fetchPosts = async () => {
    try { 
        const response = await fetch(`${APIURL}/posts`);
        const data = await response.json();
        setPosts(data.data.posts);
    }
    catch (error) {
        console.log(error);
    }}

    useEffect(() => {   
        fetchPosts();
    }
    , []);


    return (
        <>
        <div className='posts-header'>
        <div className='posts-header-title'><h1>Posts</h1></div></div>
        
        <div className='posts-container'>
            {posts.map((post) => (
                <div className='post-item' key={post._id}>
                    <div className='post-title'><h2>{post.title}</h2></div>
                    <div className='post-price'><p>Price: {post.price}</p></div>
                    <div className='post-description'><p>Description: {post.description}</p></div>
                </div>
            ))}
      
        </div>
        </>
    )
}