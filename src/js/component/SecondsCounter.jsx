import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
    const formattedTime = props.seconds.toString().padStart(3, '0');

    return (
        <div className="d-flex mt-3 ms-3">

            <div className="number-container d-flex align-items-center me-2">
                <i className="fa-regular fa-clock"></i>
            </div>

            <div className="number-container d-flex align-items-center me-2">
                <p className="text-light fs-4 text text-center flex-fill mb-0">{formattedTime[0]}</p>
            </div>

            <div className="number-container d-flex align-items-center me-2">
                <p className="text-light fs-4 text text-center flex-fill mb-0">{formattedTime[1]}</p>
            </div>

            <div className="number-container d-flex align-items-center me-2">
                <p className="text-light fs-4 text text-center flex-fill mb-0">{formattedTime[2]}</p>
            </div>

        </div>
    );
}

export default SecondsCounter;