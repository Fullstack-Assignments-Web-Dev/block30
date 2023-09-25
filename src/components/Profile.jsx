import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { isLoggedIn, makeHeaders, getToken } from './AuthHelper';

const APIURL = `https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D`;

export default function Profile() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState('');
    const [posts, setPosts] = useState([]);
        
useEffect(() => {
    if (isLoggedIn())  {
        getUserData();
                    
    }}, [])

    console.log(userData)

    const getUserData = async () => {
        try {
            console.log(getToken(userData))
            const response = await fetch(`${APIURL}/users/me`, {
                headers: makeHeaders(),
                });
            const result = await response.json();
            setPosts(result.data.posts);
            setUserData(result.data);
        } catch (error) {
            navigate('/login');
        }
    }

    return (
        <>
   
            <h1>Profile</h1>
            <h2>Welcome {userData.username}</h2>

            <div className='profile-container'>
                <div className='profile-item'><p>Cohort: {userData.cohort}</p></div>

                
                <div className='profile-item'><p>Messages: {userData.messages}</p></div>
                <div className='profile-item'><p>Title: {userData.title}</p></div>
            </div>
        
            {/* <div className=''>

            {posts.map((posts) => (
                <div className='post-item' key={posts._id}>
                    <div className='post-title'><h2>{posts.title}</h2></div>
                    <div className='post-price'><p>Price: {posts.price}</p></div>
                    <div className='post-description'><p>Description: {post.description}</p></div>
                </div>
            ))}
                    
                </div> */}
        
        </>
    )
}