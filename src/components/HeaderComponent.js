import React from 'react';

function Header() {
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
                            <a className="nav-link nav-scroll active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-scroll" href="#findParts">Find Parts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-scroll" href="#buildPC">Build a PC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-scroll" href="./getAdvice.html">Get Advice</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-scroll" href="#contactUs">Contact Us</a>
                        </li>
                    </ul>
                    <i className="fas fa-shopping-cart fa-lg my-auto"></i>
                </div>
            </div>
        </nav>
    );
}

export default Header;