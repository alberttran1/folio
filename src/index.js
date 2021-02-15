import React from 'react';
import ReactDOM from 'react-dom';
import background from "./img/background.jpg";
import './index.css';

// background
const Background = () => {
  return (
    <img src={background} class="bg" alt="background"></img>
  )
}

const App = () => {
  return (
    <Background />
  )
}


ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals