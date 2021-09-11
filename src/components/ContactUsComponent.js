import React from 'react';

function ContactUs() {
    return (
        <div id="contactUs" className="container text-center">
            <div className="text-center">
                <h1>Contact Us</h1>
                <h5 className="my-3">Have a question? Click the button for my email and phone number!</h5>
            </div>
            <button id="contact-modal" className="btn main-button btn-light mb-3 text-nowrap">Contact Us</button>
        </div>
    );
}

export default ContactUs;