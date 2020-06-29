import React from 'react'
import { Reddit } from '../components/Reddit'
import Header from '../components/header'
import { Bikes } from '../components/Bikes'

interface Props {

}


const InfoScreen: React.FC<Props> = () => {

        return (<div>
            <Header siteTitle="Infoskjerm"/>
            <Reddit />
            <Bikes />
            </div>);
}

export default InfoScreen