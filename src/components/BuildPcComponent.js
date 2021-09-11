import React, { Component } from "react";
import { Card, Button, CardImg, CardGroup, CardBody, CardFooter } from 'reactstrap';

class BuildPc extends Component {
    render() {
        const card = this.props.pcBuilds.map(pc => {
            return (
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
                        <button type="button" className="btn main-button btn-light">Customize</button>
                        <button type="button" className="btn main-button btn-light ml-2 mt-md-2 my-lg-auto">Buy Now</button>
                    </CardFooter>
                </Card>
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