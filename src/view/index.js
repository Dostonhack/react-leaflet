import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, Popup,Circle ,CircleMarker,Polyline,Rectangle,Polygon} from 'react-leaflet'
import './index.module.css'

const View = () => {
    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }
    const center = [51.505, -0.09]


    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
    ]

    const multiPolyline = [
        [
            [51.5, -0.1],
            [51.5, -0.12],
            [51.52, -0.12],
        ],
        [
            [51.5, -0.05],
            [51.5, -0.06],
            [51.52, -0.06],
        ],
    ]

    const polygon = [
        [51.515, -0.09],
        [51.52, -0.1],
        [51.52, -0.12],
    ]

    const multiPolygon = [
        [
            [51.51, -0.12],
            [51.51, -0.13],
            [51.53, -0.13],
        ],
        [
            [51.51, -0.05],
            [51.51, -0.07],
            [51.53, -0.07],
        ],
    ]

    const rectangle = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]

    const fillBlueOptions = { fillColor: 'blue' }
    const blackOptions = { color: 'black' }
    const limeOptions = { color: 'lime' }
    const purpleOptions = { color: 'purple' }
    const redOptions = { color: 'red' }
    return (
        <div>
            <MapContainer center={[41.2213, 69.8597]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[41.2213, 69.8597]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}

                {/* <LocationMarker /> */}


                <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
                <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
                    <Popup>Popup in CircleMarker</Popup>
                </CircleMarker>
                <Polyline pathOptions={limeOptions} positions={polyline} />
                <Polyline pathOptions={limeOptions} positions={multiPolyline} />
                <Polygon pathOptions={purpleOptions} positions={polygon} />
                <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
                <Rectangle bounds={rectangle} pathOptions={blackOptions} />
            </MapContainer>
        </div>

    )
}

export default View