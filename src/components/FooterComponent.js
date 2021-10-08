import React from 'react';

function Footer() {
    return (
        <footer id="footer">
            <nav className="navbar navbar-light bg-light sticky-top navbar-expand-md">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./index.html">CustomPCBuilder</a>
                    <ul id="nav-footer" className="navbar-nav mx-auto mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#findParts">Find Parts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#buildPC">Build a PC</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#getAdvice">Get Advice</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactUs">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;