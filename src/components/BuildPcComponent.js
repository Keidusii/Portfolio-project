import React, { Component } from "react";
import { Card, Button, CardImg, CardGroup, CardBody, CardFooter,
        Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class BuildPc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        const card = this.props.pcBuilds.map(pc => {
            return (
                <React.Fragment>
                    <Card key={pc.id}>
                        <CardImg width="100%" src={pc.src} alt={pc.alt}/>
                        <CardBody>
                            <h5>PC #{pc.id + 1}</h5>
                            <p className ="card-text pc-price">From {pc.cost}</p>
                            <ul>
                                <li>CPU: {pc.cpu}</li>
                                <li>GPU: {pc.gpu}</li>
                                <li>Motherboard: {pc.motherboard}</li>
                                <li>RAM: {pc.ram}</li>
                                <li>SSD: {pc.ssd}</li>
                                <li>CPU Cooler: {pc.cpuCooler}</li>
                                <li>PSU: {pc.psu}</li>
                                <li>Case: {pc.case}</li>
                            </ul>
                        </CardBody>
                        <CardFooter>
                            <Button color="light" className="main-button" onClick={this.toggleModal}>Customize</Button>
                            <Button color="light" className="main-button ml-2 mt-md-2 my-lg-auto">Buy Now</Button>
                        </CardFooter>
                    </Card>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>
                            <h1>Customize</h1>
                        </ModalHeader>
                        <ModalBody>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="light" className="main-button" onClick={this.toggleModal}>Close</Button>
                            <Button color="light" className="main-button" onClick={this.toggleModal}>Add to Cart</Button>
                        </ModalFooter>
                    </Modal>
                </React.Fragment>
            );
        });

        return (
            <div className="container" id="buildPC">
                <div className="text-center mb-4">
                    <h1>Build a PC</h1>
                </div>
                <CardGroup>
                    {card}
                </CardGroup>
                <hr />
            </div>
        );
    }
}

export default BuildPc;