import React from "react"
import Header from "../components/header";
import { Reddit } from "../components/Reddit"
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
