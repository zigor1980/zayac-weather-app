import {Component} from 'react';
import ReactMapGL, {FlyToInterpolator, Marker} from 'react-map-gl';
import React from "react";
import {connect} from "react-redux";
import './Map.css';

function stateToProps(state, props) {
    return {
        forecast: state.forecast,
    }
}

const Map = connect(stateToProps)(class MapInternal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: this.props.size.width,
                height: this.props.size.height,
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 8,
            }
        };
    }

    componentWillReceiveProps({size, forecast}) {
        let {cod, coord} = forecast;
        let {viewport} = this.state;

        viewport = {
            ...viewport,
            width: size.width,
            height: size.heigth,
        };

        if (coord && cod === 200) {
            console.log(coord);
            viewport = {
                ...viewport,
                latitude: coord.lat,
                longitude: coord.lon,
                zoom: 10,
                transitionDuration: 3000,
                transitionInterpolator: new FlyToInterpolator(),
            }
        }

        this.setState({
            viewport,
        })
    }

    render() {
        let {forecast} = this.props;

        return (
            <ReactMapGL
                mapboxApiAccessToken={"pk.eyJ1Ijoic3dkb251dCIsImEiOiJjam4zaG9lN3gwY2liM3ZtaHQ1azVhbGtkIn0.fjUjnQgZWbFUgRd4Ir1ULQ"}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
            >
                {forecast && forecast.coord && (
                    <Marker
                        latitude={forecast.coord.lat}
                        longitude={forecast.coord.lon}
                        className="map__marker"
                    />
                )}
            </ReactMapGL>
        );
    }
});

export default Map;
