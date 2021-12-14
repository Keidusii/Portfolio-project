import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';
import Badge from '@mui/material/Badge';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            total: 0
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        const cart = this.props.cart.map(item => {
            return(
                <Row key={item.id} className="mt-2">
                    <Col>
                        <img src={item.pic} alt={item.id} height="95px" width="95px"/>
                    </Col>
                    <Col>
                        <strong>{item.name}</strong> <br />
                        {item.cpu} <br />
                        {item.gpu}
                    </Col>
                    <Col>
                        <strong>${item.totalCost}</strong>
                    </Col>
                    <hr />
                </Row>
            )
        });

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
                        <Button onClick={this.toggleModal}>
                            <Badge badgeContent={this.props.cart.length} color="error">
                                <i className="fas fa-shopping-cart fa-lg my-auto" />
                            </Badge>
                        </Button>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>
                                Cart
                            </ModalHeader>
                            <ModalBody>
                                {cart.length === 0 && <h6 className="text-center">Your Cart is Empty</h6>}
                                {cart}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="light" className="main-button" onClick={() => {this.toggleModal()}}>
                                    Close
                                </Button>
                                <Button color="primary" className="main-button">
                                    Check Out
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;