import React from "react";
import {BrowserRouter, Route,} from "react-router-dom";
import Header from "../Header";
import Maine from "../Maine";
import About from "../About";
import {Routes} from "react-router";
import Home from "../Home";

function MineRouting (){
    return (
        <div className='App__Routing'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} >
                        <Route path='' element={<Maine/>} />
                        <Route path='Header' element={<Header/>} />
                        <Route path='Maine' element={<Maine/>} />
                        <Route path='About' element={<About/>} />
                    </Route>
                    <Route path='*' element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default MineRouting;