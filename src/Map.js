import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleApi from './utils/GoogleApi';
import GoogleApiComponent from './GoogleApiComponent';

class Map extends React.Component {
    constructor(props) {
        super(props);

        const { lat, lng } = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        }
    }

    componentDidMount() {
        this.loadMap();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }
    loadMap() {

        if (this.props && this.props.google) {
            // google is available
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef); // Actual DOM Element not virtual.

            let { initialCenter, zoom } = this.props;

            const { lat, lng } = this.state.currentLocation; // I will not config to currentLocation
            const center = new maps.LatLng(lat, lng);

            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);

        }
    }
    render() {
        console.log(this.props);
        return (
            <div ref="map">

            </div>
        )
    }
}

Map.propTypes = {
    google: React.PropTypes.object,
    zoom: React.PropTypes.number,
    initialCenter: React.PropTypes.object
}
Map.defaultProps = {
    zoom: 13,
    // San Francisco, by default
    initialCenter: {
        lat: 5.644429,
        lng: -0.1537547
    }
}
export default Map;