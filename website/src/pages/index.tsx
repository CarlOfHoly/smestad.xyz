import React from "react"
import Header from "../components/header";
import { Link } from "gatsby"

const IndexPage: React.FC = () => (
    <div>
        <Header siteTitle="Checking out Gatsby"/>
        <h1>
            <Link to="/infoscreen" >INFOSKJERM</Link>
        </h1>
    </div>
) 

export default IndexPage
