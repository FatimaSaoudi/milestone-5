import React from "react";
import { Link as ReactLink } from 'react-router-dom';


function NavBar() {


    return (
        <nav className="navbar navbar-expand-lg py-2 sticky-top navbar-light bg-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img className="logo" src={require("../img/bh.png")} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/donate">Donate Now</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">Shop Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/involved">Get Involved</a>
                        </li>
                    </ul>

                    <a href="/register" className=" btn btn-primary ms-lg-3">Register</a>
                    <a href="/login" className="btn btn-primary ms-lg-3">Log in</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
