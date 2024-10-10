import React from 'react'
import { useNavigate } from 'react-router-dom';
import './About.css'

const About = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/dashboard');
    }
  return (
    <div className='about-container'>
        <h1> About Us </h1>
        <p>
            Lets learn something new.
        </p>
         <button onClick={handleClick}>
            Move to dashboard page
        </button>
    </div>
  )
}

export default About
