import React from 'react';
import ReactDOM from 'react-dom';
import background from "./img/background.jpg";
import logo from "./img/folioLogo.png";
import './index.css';

import ReactModalLogin from "react-modal-login";

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

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      loading: false,
      error: null
    };
  }

  openModal() {
    this.setState({
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }

  onLoginSuccess(method, response) {
    console.log("logged successfully with " + method);
  }

  onLoginFail(method, response) {
    console.log("logging failed with " + method);
    this.setState({
      error: response
    });
  }

  startLoading() {
    this.setState({
      loading: true
    });
  }

  finishLoading() {
    this.setState({
      loading: false
    });
  }

  afterTabsChange() {
    this.setState({
      error: null
    });
  }

  render() {
    return (
      <div>
        <button class="Start" onClick={() => this.openModal()}>Open Modal</button>

        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
        />
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <div style={{zIndex: 1, position: "absolute"}}><Background /></div>
      <div style={{zIndex: 2, position: "relative"}}><Header /></div>
      <div style={{zIndex: 2, position: "absolute"}}><Text /></div>
    </div>
  )
}


ReactDOM.render(<App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals