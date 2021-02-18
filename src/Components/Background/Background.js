import background from "../img/background.jpg";
import { Component } from 'react';

export class Background extends Component{
    render(){
    return (
      <img src={background} class="bg" alt="background"></img>
    )
  }
}

export default Background;
