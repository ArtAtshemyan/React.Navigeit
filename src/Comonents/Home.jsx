import React from "react";
import './css/home.css';
import {Link} from "react-router-dom";
import {Outlet} from "react-router";


function Home (){
    return(
        <>
            <div className='APP__Home'>
                <Link to='Maine' className='Home__Link'>Maine</Link>
                <Link to='About' className='Home__Link'>About</Link>
                <Link to='Header' className='Home__Link'>Header</Link>
            </div>
            <div className='Home__Section'>
                <Outlet/>
            </div>
            <div className='APP__Footer'>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-google-plus-g"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </>
    )
}
export default Home;
