import React, { Component } from 'react';
import './GoogleApiComponent';
import './App.css';

export class Container extends React.Component {
  render() {
    if(!this.props.loaded){
      return(
        <div> Loading... </div>
      )
    }
    return (
      <div className="App">
        <Map google={this.props.google}>
        </Map>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyC2I2wP7qF-J0KJdGM1Yj4_iLrjEqXUDMw',	
})(Container);
