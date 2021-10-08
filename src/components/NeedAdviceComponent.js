import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class NeedAdvice extends Component {
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
        })
    }
    render() {
        return (
            <div className="container" id="getAdvice">
                <div className="text-center">
                    <h1>Get Advice</h1>
                    <h5 className="mt-4">Whether it's by email, phone, or video call, I can help!</h5>
                    <p>
                        Click the button to set up a time to talk!
                    </p>
                </div>
                <div className="text-center">
                    <Button color="light" className="main-button text-nowrap" onClick={this.toggleModal}>Get Advice</Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h1>Get Advice</h1>
                    </ModalHeader>
                    <ModalBody>

                    </ModalBody>
                </Modal>
                <hr />
            </div>
        );
    }
}

export default NeedAdvice;