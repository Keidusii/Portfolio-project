import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

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
                        <div class="text-center">
                            <p>Fill out the form below and you will receive an email to confirm an appointment:</p>
                        </div>
                        <Form id="adviceForm">
                            <FormGroup>
                                <Input type="text" placeholder="First name" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" placeholder="Last name" />
                            </FormGroup>
                            <FormGroup class="form-group">
                                <Input type="email" placeholder="Email Address" />
                            </FormGroup>
                            <FormGroup class="form-group">
                                <Label class="font-weight-bold" for="bestContact">Best form of contact:</Label>
                                <Input type="select" name="contactSelect" id="bestContact">
                                    <option>Choose...</option>
                                    <option>Phone</option>
                                    <option>Email</option>
                                    <option>Video Call</option>
                                </Input>
                            </FormGroup>
                            <legend id="daysAvailable">Days Available:</legend>
                            <FormGroup check id="days">
                                <FormGroup class="form-check form-check-inline">
                                    <Label check>
                                        <Input type="radio" name="dayCheck" />{' '}
                                        Monday
                                    </Label>
                                </FormGroup>
                                <FormGroup class="form-check form-check-inline">
                                    <Label check>
                                        <Input type="radio" name="dayCheck" />{' '}
                                        Tuesday
                                    </Label>
                                </FormGroup>
                                <FormGroup class="form-check form-check-inline">
                                    <Label check>
                                        <Input type="radio" name="dayCheck" />{' '}
                                        Wednesday
                                    </Label>
                                </FormGroup>
                                <FormGroup class="form-check form-check-inline">
                                    <Label check>
                                        <Input type="radio" name="dayCheck" />{' '}
                                        Thursday
                                    </Label>
                                </FormGroup>
                                <FormGroup class="form-check form-check-inline">
                                    <Label check>
                                        <Input type="radio" name="dayCheck" />{' '}
                                        Friday
                                    </Label>
                                </FormGroup>
                                <FormGroup class="form-check form-check-inline">
                                    <Label check>
                                        <Input type="radio" name="dayCheck" />{' '}
                                        Saturday
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup class="form-group">
                                <Label class="font-weight-bold mt-2" for="inputState">Best time to talk:</Label>
                                <Input type="select" name="timeSelect" id="inputState">
                                    <option selected>Choose...</option>
                                    <option>9am-10am</option>
                                    <option>10am-11am</option>
                                    <option>11am-12pm</option>
                                    <option>12pm-1pm</option>
                                    <option>1pm-2pm</option>
                                    <option>2pm-3pm</option>
                                    <option>3pm-4pm</option>
                                    <option>4pm-5pm</option>
                                    <option>5pm-6pm</option>
                                    <option>6pm-7pm</option>
                                </Input>
                                <small>All times are Eastern Standard Time</small>
                            </FormGroup>
                            <FormGroup class="form-group">
                                <Input type="textarea" placeholder="Additional Comments" />
                            </FormGroup>
                            <Button type="submit" class="btn btn-primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <hr />
            </div>
        );
    }
}

export default NeedAdvice;