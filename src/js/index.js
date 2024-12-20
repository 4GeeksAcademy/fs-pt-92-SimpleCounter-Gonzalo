//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

let seconds = 0;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<SecondsCounter seconds={seconds}/>);

window.onload = () => {
    setInterval(() => {
        seconds++;
        root.render(<SecondsCounter seconds={seconds}/>);
    }, 1000);
}

//render your react application


