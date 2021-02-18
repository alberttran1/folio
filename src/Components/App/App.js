import React from 'react';
import ReactDOM from 'react-dom';
import logo from "../img/folioLogo.png";
import './App.css';
import { Container } from '../Container/Container';
import {Background} from '../Background/Background';
import {Header} from '../Header/Header';
import {Text} from '../Text/Text';
import { Component } from 'react';

const triggerText = 'Get Started';

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Alberttran1:Cheekypoop123@cluster0.x4jd1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function onSubmit(event){
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
}

export class App extends Component{
  render(){
  return (
    <div>
      <div style={{zIndex: 1, position: "absolute"}}><Background /></div>
      <div style={{zIndex: 2, position: "relative"}}><Header /></div>
      <div style={{zIndex: 2, position: "absolute"}}><Text /></div>
      <div style={{zIndex: 2, position: "absolute"}}><Container triggerText={triggerText} onSubmit={onSubmit} /></div>
    </div>
  )}
}


export default App;