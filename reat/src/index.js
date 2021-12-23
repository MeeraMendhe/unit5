import ("./index.css");
import React from "react";
import ReactDom from "react-dom";


ReactDom.render(
    // React.createElement("h1",{},"hicfghcfghi"),
    // React.createElement(
    //     "h1",
    //     {className:"redcolor"},
    //     ["Hello webpack and ",
    // React.createElement("i",null,"React")]
    // ),
    <h1 className="redcolor">Pummy Sharma</h1>,//JSX
    document.getElementById("root")
)