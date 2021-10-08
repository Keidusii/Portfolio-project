import React, { Component } from 'react';
import { Link } from "react-scroll";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light sticky-top navbar-expand-md">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./index.html">CustomPCBuilder</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul id="nav-header" className="navbar-nav mx-auto mb-1 mb-lg-0">
                            <li className="nav-item">
                                <Link 
                                    className="nav-link nav-scroll"
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={300}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link nav-scroll"
                                    activeClass="active"
                                    to="findParts"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={300}
                                >
                                    Find Parts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link nav-scroll"
                                    activeClass="active"
                                    to="buildPC"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={300}
                                >
                                    Build a PC
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                    className="nav-link nav-scroll"
                                    activeClass="active"
                                    to="getAdvice"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={300}
                                >
                                    Get Advice
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link 
                                    className="nav-link nav-scroll"
                                    activeClass="active"
                                    to="contactUs"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={300}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <i className="fas fa-shopping-cart fa-lg my-auto"></i>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;