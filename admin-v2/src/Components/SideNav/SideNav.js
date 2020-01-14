import React from 'react';
import { Link, Router } from 'react-router-dom';
// import { IoIosConstruct } from "react-icons/io";
import './SideNav.css';

const SideNavigation = (prop) => {
    
    return (
        <div className="container">
            <nav className="side-nav">
                <header>
                    <img src="https://kbimgs.yleo.us/Tanner-test/imgs/tools.svg" width="40"/>
                    <span id="logo">Admin-guide</span>
                </header>
                {/* <h3 className="logo"><IoIosConstruct/> | Admin-Guide</h3> */}
                <input placeholder="search"></input>
                <ul className="nav">
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/Admin">Admin</Link></li>
                    <li><a className="link" href="">Templates</a></li>
                    <li><a className="link" href="">Code Snippets</a></li>
                    <li><a className="link" href="">Grammar Guide</a></li>
                    <li><a className="link" href="">Table Generator</a></li>
                    <li><a className="link" href="">Coding Resources</a></li>
                </ul>
            </nav>
        </div>
    );
};

// change the <IOIOCONSTRUCT/> icon to an image for the logo
// like this
//<img src="/static/media/react-icons.2e67b430.svg" alt="react-icons">
//<span>admin-guide</span>



export default SideNavigation;