import React,{Component} from 'react';
class GoogleMap extends Component{
  //Dom i skzbnarjeqavorumy petqa lini sra mej
  componentDidMount(){
    new google.maps.Map(this.refs.map,{
      zoom:12,
      center:{
        lat:this.props.lat,
        lng:this.props.lon
      }
    });
  }
render(){
  //this.refs.map ete grenq kberi miangamic es mapy
  return <div ref="map"/>
}

}
export default GoogleMap;