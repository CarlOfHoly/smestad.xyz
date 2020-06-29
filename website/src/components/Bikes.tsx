import React, { useState, useEffect } from 'react'
import createEnturService from '@entur/sdk'
const service = createEnturService({ clientName: 'smestad.xyz' })

interface Props {

}

export const Bikes: React.FC<Props> = () => {
    const [bikeStations, setBikeStations] = useState([])

    useEffect(() => {
        service.getBikeRentalStationsByPosition({latitude: 63.428311, longitude: 10.392514},
            230)
            .then((data) => setBikeStations(data))
    }, []);

    return (
        <div className="BikeStations" style={{ margin: 0, textAlign: "center"}}>
            <h3>Bysykkel</h3>
            {bikeStations.map(stationData => (
                <BikeStation station={stationData} key={stationData.id}/>
            ))}
        </div>
    );
}

interface StationProps {
    station: any
}

const BikeStation: React.FC<StationProps> = ({ station }) => {
    return <div className="station" style={{ margin: 0, textAlign: "center"}}>
        {station.name} - Ledige sykler ({station.bikesAvailable}) : Ledige plasser ({station.spacesAvailable})
    </div>
}