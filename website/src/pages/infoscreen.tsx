import React from 'react'
import { Reddit } from '../components/Reddit'
import Header from '../components/header'
interface Props {

}

const InfoScreen: React.FC<Props> = () => {
        return (<div>
            <Header siteTitle="Infoskjerm"/>
            <Reddit />
            </div>);
}

export default InfoScreen