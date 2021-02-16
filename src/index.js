import React from 'react';
import ReactDOM from 'react-dom';
import background from "./img/background.jpg";
import logo from "./img/folioLogo.png";
import './index.css';

// background image
const Background = () => {
  return (
    <img src={background} class="bg" alt="background"></img>
  )
}

// header
const Header = () => {
  return (
    <div class="header">
      <a href="#"><img src = {logo} class="logo"></img></a>
      <div class="header-right">
        <a class="menu button" href="#">Log In</a>
        <a class="active button" href="#">Sign Up</a>
      </div>
    </div>
  )
}

// text
const Text = () => {
  return (
    <p class="title">Create your own<br></br>professional portfolio.</p>
  )
}

// get started
const Start = () => {
  return (
    <a class="start" href="#">Get Started</a>
  )
}

const App = () => {
  return (
    <div>
      <div style={{zIndex: 1, position: "absolute"}}><Background /></div>
      <div style={{zIndex: 2, position: "relative"}}><Header /></div>
      <div style={{zIndex: 2, position: "absolute"}}><Text /></div>
      <div style={{zIndex: 3, position: "absolute"}}><Start /></div>
    </div>
  )
}


ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals