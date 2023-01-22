import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Oorja from "./Oorja";
import Publication from "./Publication";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import {Switch ,Route, Redirect } from "react-router-dom";



const App=()=>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/service" component={Service}></Route>
            <Route exact path="/oorja" component={Oorja}></Route>
            <Route exact path="/publication" component={Publication}></Route>
            <Route exact path="/gallery" component={Gallery}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Redirect to="/"/>
        </Switch>
        
        
        </>
    )
}

export default App;