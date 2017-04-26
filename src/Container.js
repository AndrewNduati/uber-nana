import React, { Component } from 'react';
import { InfoWindow, Marker, Map, GoogleApiWrapper } from 'google-maps-react'
import './App.css';

export class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            latlng: {
                lat: 5.644839,
                lng: -0.151621,

            }
        }
    }
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <div style={style}>
                <Map google={window.google} initialCenter={this.state.latlng} zoom={17}>
                    <Marker

						name={'White House'}
						position={{lat: 5.6461055, lng:  -0.1604878}} />
                      <Marker

						name={'MEST'}
						position={this.state.latlng} />  
                </Map>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyC2I2wP7qF-J0KJdGM1Yj4_iLrjEqXUDMw',
})(Container)