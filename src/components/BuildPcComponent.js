import React, { Component } from "react";
import {
    Card, Button, CardImg, CardGroup, CardBody, CardFooter,
    Modal, ModalHeader, ModalBody, ModalFooter, Collapse
} from 'reactstrap';


class BuildPc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isOpen: false,
            isCardTwoOpen: false,
            isCardThreeOpen: false,
            cart: props.cart
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleCard = this.toggleCard.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggleCard() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    addToCart() {
        this.setState({
            cart: [...this.state.cart, "this"]
        });
    }

    render() {
        const card = this.props.pcBuilds.map(pc => {
            return (
                <React.Fragment key={pc.id}>
                    <Card>
                        <CardImg width="100%" src={pc.src} alt={pc.alt} />
                        <CardBody>
                            <h5>PC #{pc.id + 1}</h5>
                            <p className="card-text pc-price">From {pc.cost}</p>
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
                            <Button color="light" className="col text-nowrap main-button mb-2" onClick={this.toggleModal}>Customize</Button>
                            <Button color="light" className="col main-button" onClick={this.addToCart}>Buy Now</Button>
                        </CardFooter>
                    </Card>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>
                            <h1>Customize</h1>
                        </ModalHeader>
                        <ModalBody>
                            <Button color="primary" onClick={this.toggleCard} style={{ marginBottom: '1rem' }}>Toggle</Button>
                            <Collapse isOpen={this.state.isOpen}>
                                <Card>
                                    <CardBody>
                                        Anim pariatur cliche reprehenderit,
                                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                                        nesciunt sapiente ea proident.
                                    </CardBody>
                                </Card>
                            </Collapse>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="light" className="main-button" onClick={this.toggleModal}>Close</Button>
                        <Button color="light" className="main-button" onClick={this.addToCart}>Add to Cart</Button>
                    </ModalFooter>
                </Modal>
                </React.Fragment >
            );
    });

    return(
            <div className = "container" id = "buildPC" >
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