import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Button clicked");
    navigate('/about');
  };

  return (
    <div className="home-container">
      <h1>Hey there!</h1>
      <p>I'm Sosha — a QA engineer with a passion for web development. I create and test web applications that make every user click smooth and enjoyable.</p>
      <p>Want to know more? Just click here!</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default Home;