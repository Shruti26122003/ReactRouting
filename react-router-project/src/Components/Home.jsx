import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/about');
    }
  return (
    <div className='home-container'>
        <h1> Welcome to the Home Page</h1> 
         <button onClick={handleClick}>
            Move to about page
        </button>
    </div>
  )
}

export default Home
