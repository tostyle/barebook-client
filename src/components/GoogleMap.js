import React, { Component } from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'

const Body = styled.div`
  width: 100%;
  height: 500px;
  margin: 80px 0px;
`

const AnyReactComponent = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: #e1b35a;
`

export default () =>
  <Body>
    <SimpleMap />
  </Body>

class SimpleMap extends Component {
  static defaultProps = {
    center: { lat: 13.8430492, lng: 100.619209 },
    zoom: 13,
  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent lat={13.8430492} lng={100.619209} />
      </GoogleMapReact>
    )
  }
}
