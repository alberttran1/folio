import React from 'react';
import './App.css';
import {Background} from '../Background/Background';
import {Header} from '../Header/Header';
import {Text} from '../Text/Text';
import { Component } from 'react';
import {Start} from '../Start/Start';

export class App extends Component{
  render(){
  return (
    <div>
      <div style={{zIndex: 1, position: "absolute"}}><Background /></div>
      <div style={{zIndex: 2, position: "relative"}}><Header /></div>
      <div style={{zIndex: 2, position: "absolute"}}><Text /></div>
      <div style={{zIndex: 2, position: "absolute"}}><Start /></div>
    </div>
  )}
}


export default App;