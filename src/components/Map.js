import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
                viewport: {
                    width: window.innerWidth,
                    height: 600,
                    latitude: 40.7128,
                    longitude: -74.0060,
                    zoom: 11
                },
                mounted: false 
        };
        this.handleViewportChange = this.handleViewportChange.bind(this)
    }
    componentDidMount () {
        this.setState({ mounted: true })
      }
    handleViewportChange(viewport){
        this.setState({viewport})
    }
    render() {
        return (
            <div className="map">
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={(viewport) => {
                        if (this.state.mounted){
                            this.handleViewportChange(viewport)
                        }
                    }}
                />
            </div>     
        );
    }
}

export default Map;