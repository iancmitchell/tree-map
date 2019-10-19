import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
                viewport: {
                    width: 400,
                    height: 400,
                    latitude: 37.7577,
                    longitude: -122.4376,
                    zoom: 8
                }
        };
    }
    render() {
        return (
            <div className="map">
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={(viewport) => this.setState({viewport})}
                />
            </div>     
        );
    }
}

export default Map;