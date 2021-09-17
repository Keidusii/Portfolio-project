import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ContactUs extends Component {
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
        return (
            <div id="contactUs" className="container text-center">
                <div className="text-center">
                    <h1>Contact Us</h1>
                    <h5 className="my-3">Have a question? Click the button for my email and phone number!</h5>
                </div>
                <button color="light" id="contact-modal" className="main-button mb-3 text-nowrap" onClick={this.toggleModal}>Contact Us</button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h1>Contact Us</h1>
                    </ModalHeader>
                    <ModalBody>
                        <p>Email: contact@custompcbuilder.com</p>
                        <p>Phone: (123)456-7890</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggleModal} color="light" className="main-button">Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ContactUs;