import React from 'react';

function FindParts() {
    return (
        <div className="container" id="findParts">
            <div className="text-center">
                <h1>Find Parts</h1>
                <h5 className="mt-4">PC Part Picker is the way to go!</h5>
                <p>
                    Go to <a href="https://pcpartpicker.com" target="_blank">PCPartPicker.com</a> to find compatible parts for you're build. If you need help,
                    you can contact us.
                </p>
            </div>
            <div className="text-center">
                <button className="btn main-button btn-light text-nowrap">Find Parts</button>
            </div>
            <hr />
        </div>
    );
}

export default FindParts;