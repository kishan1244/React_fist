import { useState } from "react"
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css"
import'./Navbar.js'
import Navbar from "./Navbar.js"
import Dt from "./Dt.js"
import './Itm.js'
import Itm from "./Itm.js"
import Cont from "./Cont.js"
import Ft from "./Ft.js"


const Home = () => {
    return (
        <div>
            < Navbar />
            <Dt />
            <Itm />
            <Cont />
            <Ft />
        </div>
        
    )
}

export default Home;




