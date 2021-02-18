import logo from "../img/folioLogo.png";
import { Component } from 'react';

export class Header extends Component {
    render(){
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
}

export default Header;