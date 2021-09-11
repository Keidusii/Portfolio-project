import React from 'react';

function NeedAdvice() {
    return (
        <div className="container" id="needAdvice">
            <div className="text-center">
                <h1>Get Advice</h1>
                <h5 className="mt-4">Whether it's by email, phone, or video call, I can help!</h5>
                <p>
                    Click the button to set up a time to talk!
                </p>
            </div>
            <div className="text-center">
                <button className="btn main-button btn-light text-nowrap">Get Advice</button>
            </div>
            <hr />
        </div>
    );
}

export default NeedAdvice;