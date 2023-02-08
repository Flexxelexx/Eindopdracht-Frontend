import React, { useState, useEffect } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const MapComponent = () => {
    const [position, setPosition] = useState([51.505, -0.09])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setPosition([position.coords.latitude, position.coords.longitude])
            },
            (error) => {
                console.error(error)
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }, [])

    return (
        <Map center={position} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>Je huidige locatie</Popup>
            </Marker>
        </Map>
    )
}

export default MapComponent;
