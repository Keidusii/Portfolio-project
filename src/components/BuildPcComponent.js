import React, { Component } from "react";
import {
    Card, Button, CardImg, CardGroup, CardBody, CardHeader, CardFooter,
    Modal, ModalHeader, ModalBody, ModalFooter, Collapse,
    FormGroup, Label, Input
} from 'reactstrap';
import { PCBUILDS as pc } from "../Shared/PcBuilds";

class BuildPc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOneOpen: false,
            isModalTwoOpen: false,
            isModalThreeOpen: false,
            isCardOneOpen: true,
            isCardTwoOpen: true,
            isCardThreeOpen: true,
            cart: props.cart
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleCard = this.toggleCard.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    toggleModal(index) {
        if (index === 0) {
            this.setState({
                isModalOneOpen: !this.state.isModalOneOpen
            });
        }
        else if (index === 1) {
            this.setState({
                isModalTwoOpen: !this.state.isModalTwoOpen
            });
        }
        else {
            this.setState({
                isModalThreeOpen: !this.state.isModalThreeOpen
            });
        }
    }

    toggleCard(index) {
        if (index === 0) {
            this.setState({
                isCardOneOpen: !this.state.isCardOneOpen
            });
        }
        else if (index === 1) {
            this.setState({
                isCardTwoOpen: !this.state.isCardTwoOpen
            });
        }
        else {
            this.setState({
                isCardThreeOpen: !this.state.isCardThreeOpen
            });
        }
    }

    addToCart(item) {
        // this.setState({
        //     cart: [...this.state.cart, {
        //         id: '',
        //         addedCost: '',
        //         addedItems: ''
        //     }]
        // });
    }

    render() {
        return (
            <div className="container" id="buildPC" >
                <div className="text-center mb-4">
                    <h1>Build a PC</h1>
                </div>
                <CardGroup>
                    <Card>
                        <CardImg width="100%" src={pc[0].src} alt={pc[0].alt} />
                        <CardBody>
                            <h5>PC #{pc[0].id + 1}</h5>
                            <p className="card-text pc-price">From {pc[0].cost}</p>
                            <ul>
                                <li>CPU: {pc[0].cpu}</li>
                                <li>GPU: {pc[0].gpu}</li>
                                <li>Motherboard: {pc[0].motherboard}</li>
                                <li>RAM: {pc[0].ram}</li>
                                <li>SSD: {pc[0].ssd}</li>
                                <li>CPU Cooler: {pc[0].cpuCooler}</li>
                                <li>PSU: {pc[0].psu}</li>
                                <li>Case: {pc[0].case}</li>
                            </ul>
                        </CardBody>
                        <CardFooter>
                            <Button color="light" className="col text-nowrap main-button mb-2" onClick={() => { this.toggleModal(0) }}>Customize</Button>
                            <Button color="light" className="col main-button" onClick={this.addToCart()}>Buy Now</Button>
                        </CardFooter>
                    </Card>

                    <Modal id="modal1" isOpen={this.state.isModalOneOpen} toggle={() => { this.toggleModal(0) }}>
                        <ModalHeader toggle={() => { this.toggleModal(0) }}>
                            <h1>Customize</h1>
                        </ModalHeader>
                        <ModalBody>
                            <img className="img-fluid" src={pc[0].src} alt="PC Pic" />
                            <CardHeader className="mb-0" onClick={() => { this.toggleCard(0) }} style={{ marginBottom: '1rem' }}>CPU</CardHeader>
                            <Collapse isOpen={this.state.isCardOneOpen}>
                                <Card>
                                    <CardBody>
                                        <FormGroup tag="fieldset">
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    checked
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[0].cpu}
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[0].altCpus[1]} <strong>+${pc[0].altCpuCost[1]}</strong>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[0].altCpus[2]} <strong>+${pc[0].altCpuCost[2]}</strong>
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                    </CardBody>
                                </Card>
                            </Collapse>

                            <CardHeader className="mb-0" onClick={() => { this.toggleCard(0) }} style={{ marginBottom: '1rem' }}>GPU</CardHeader>
                            <Collapse isOpen={this.state.isCardOneOpen}>
                                <Card>
                                    <CardBody>
                                        <FormGroup tag="fieldset">
                                            <FormGroup check>
                                                <Input
                                                    name="radio2"
                                                    type="radio"
                                                    checked
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[0].gpu}
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio2"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[0].altGpus[1]} <strong>+${pc[0].altGpuCost[1]}</strong>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio2"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[0].altGpus[2]} <strong>+${pc[0].altGpuCost[2]}</strong>
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </ModalBody>
                        <ModalFooter>
                            <strong className="text-left">Total Cost: {pc[0].cost}</strong>
                            <Button color="light" className="main-button" onClick={() => { this.toggleModal(0) }}>Close</Button>
                            <Button color="light" className="main-button" onClick={this.addToCart(this)}>Add to Cart</Button>
                        </ModalFooter>
                    </Modal>

                    <Card>
                        <CardImg width="100%" src={pc[1].src} alt={pc[1].alt} />
                        <CardBody>
                            <h5>PC #{pc[1].id + 1}</h5>
                            <p className="card-text pc-price">From {pc[1].cost}</p>
                            <ul>
                                <li>CPU: {pc[1].cpu}</li>
                                <li>GPU: {pc[1].gpu}</li>
                                <li>Motherboard: {pc[1].motherboard}</li>
                                <li>RAM: {pc[1].ram}</li>
                                <li>SSD: {pc[1].ssd}</li>
                                <li>CPU Cooler: {pc[1].cpuCooler}</li>
                                <li>PSU: {pc[1].psu}</li>
                                <li>Case: {pc[1].case}</li>
                            </ul>
                        </CardBody>
                        <CardFooter>
                            <Button color="light" className="col text-nowrap main-button mb-2" onClick={() => { this.toggleModal(1) }}>Customize</Button>
                            <Button color="light" className="col main-button" onClick={this.addToCart()}>Buy Now</Button>
                        </CardFooter>
                    </Card>

                    <Modal id="modal2" isOpen={this.state.isModalTwoOpen} toggle={() => { this.toggleModal(1) }}>
                        <ModalHeader toggle={() => { this.toggleModal(1) }}>
                            <h1>Customize</h1>
                        </ModalHeader>
                        <ModalBody>
                            <img className="img-fluid" src={pc[1].src} alt="PC Pic" />
                            <CardHeader className="mb-0" onClick={() => { this.toggleCard(1) }} style={{ marginBottom: '1rem' }}>CPU</CardHeader>
                            <Collapse isOpen={this.state.isCardTwoOpen}>
                                <Card>
                                    <CardBody>
                                        <FormGroup tag="fieldset">
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    checked
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[1].cpu}
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[1].altCpus[1]} <strong>+${pc[1].altCpuCost[1]}</strong>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[1].altCpus[2]} <strong>+${pc[1].altCpuCost[2]}</strong>
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                    </CardBody>
                                </Card>
                            </Collapse>

                            <CardHeader className="mb-0" onClick={() => { this.toggleCard(1) }} style={{ marginBottom: '1rem' }}>GPU</CardHeader>
                            <Collapse isOpen={this.state.isCardTwoOpen}>
                                <Card>
                                    <CardBody>
                                        <FormGroup tag="fieldset">
                                            <FormGroup check>
                                                <Input
                                                    name="radio2"
                                                    type="radio"
                                                    checked
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[1].gpu}
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio2"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[1].altGpus[1]} <strong>+${pc[1].altGpuCost[1]}</strong>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio2"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[1].altGpus[2]} <strong>+${pc[1].altGpuCost[2]}</strong>
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </ModalBody>
                        <ModalFooter>
                            <strong className="text-left">Total Cost: {pc[1].cost}</strong>
                            <Button color="light" className="main-button" onClick={() => { this.toggleModal(1) }}>Close</Button>
                            <Button color="light" className="main-button" onClick={this.addToCart(this)}>Add to Cart</Button>
                        </ModalFooter>
                    </Modal>

                    <Card>
                        <CardImg width="100%" src={pc[2].src} alt={pc[2].alt} />
                        <CardBody>
                            <h5>PC #{pc[2].id + 1}</h5>
                            <p className="card-text pc-price">From {pc[2].cost}</p>
                            <ul>
                                <li>CPU: {pc[2].cpu}</li>
                                <li>GPU: {pc[2].gpu}</li>
                                <li>Motherboard: {pc[2].motherboard}</li>
                                <li>RAM: {pc[2].ram}</li>
                                <li>SSD: {pc[2].ssd}</li>
                                <li>CPU Cooler: {pc[2].cpuCooler}</li>
                                <li>PSU: {pc[2].psu}</li>
                                <li>Case: {pc[2].case}</li>
                            </ul>
                        </CardBody>
                        <CardFooter>
                            <Button color="light" className="col text-nowrap main-button mb-2" onClick={() => { this.toggleModal(2) }}>Customize</Button>
                            <Button color="light" className="col main-button" onClick={this.addToCart()}>Buy Now</Button>
                        </CardFooter>
                    </Card>

                    <Modal id="modal3" isOpen={this.state.isModalThreeOpen} toggle={() => { this.toggleModal(2) }}>
                        <ModalHeader toggle={() => { this.toggleModal(2) }}>
                            <h1>Customize</h1>
                        </ModalHeader>
                        <ModalBody>
                            <img className="img-fluid" src={pc[2].src} alt="PC Pic" />
                            <CardHeader className="mb-0" onClick={() => { this.toggleCard(2) }} style={{ marginBottom: '1rem' }}>CPU</CardHeader>
                            <Collapse isOpen={this.state.isCardThreeOpen}>
                                <Card>
                                    <CardBody>
                                        <FormGroup tag="fieldset">
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                    checked
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[2].cpu}
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[2].altCpus[1]} <strong>+${pc[2].altCpuCost[1]}</strong>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio1"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[2].altCpus[2]} <strong>+${pc[2].altCpuCost[2]}</strong>
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                    </CardBody>
                                </Card>
                            </Collapse>

                            <CardHeader className="mb-0" onClick={() => { this.toggleCard(2) }} style={{ marginBottom: '1rem' }}>GPU</CardHeader>
                            <Collapse isOpen={this.state.isCardThreeOpen}>
                                <Card>
                                    <CardBody>
                                        <FormGroup tag="fieldset">
                                            <FormGroup check>
                                                <Input
                                                    name="radio2"
                                                    type="radio"
                                                    checked
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[2].gpu}
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio2"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[2].altGpus[1]} <strong>+${pc[2].altGpuCost[1]}</strong>
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Input
                                                    name="radio2"
                                                    type="radio"
                                                />
                                                {' '}
                                                <Label check>
                                                    {pc[2].altGpus[2]} <strong>+${pc[2].altGpuCost[2]}</strong>
                                                </Label>
                                            </FormGroup>
                                        </FormGroup>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </ModalBody>
                        <ModalFooter>
                            <strong className="text-left">Total Cost: {pc[2].cost}</strong>
                            <Button color="light" className="main-button" onClick={() => { this.toggleModal(2) }}>Close</Button>
                            <Button color="light" className="main-button" onClick={this.addToCart(this)}>Add to Cart</Button>
                        </ModalFooter>
                    </Modal>
                </CardGroup>
                <hr />
            </div>
        );
    }
}

export default BuildPc;