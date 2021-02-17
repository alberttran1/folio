import React from 'react';
import ReactDOM from 'react-dom';
import background from "./img/background.jpg";
import logo from "./img/folioLogo.png";
import './index.css';
import { Container } from './Container';

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

const App = () => {
  const triggerText = 'Get Started';

  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://Alberttran1:Cheekypoop123@cluster0.x4jd1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    (async () => {
      await client.connect();
        const collection = client.db("test").collection("devices");
        await collection.insertOne({
          "name" : event.target.name.value,
          "email" : event.target.email.value,
          "password" : event.target.password.value
        });
        client.close();
    })();
};

  return (
    <div>
      <div style={{zIndex: 1, position: "absolute"}}><Background /></div>
      <div style={{zIndex: 2, position: "relative"}}><Header /></div>
      <div style={{zIndex: 2, position: "absolute"}}><Text /></div>
      <div style={{zIndex: 2, position: "absolute"}}><Container triggerText={triggerText} onSubmit={onSubmit} /></div>
    </div>
  )
}


ReactDOM.render(<App />,document.getElementById('root'));