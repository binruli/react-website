// Import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = function () {
    const buttonText={ text:'click me', text2:'Submit' };
    const labelText='Enter name';
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}:
            </label>
            <input id="name" type="text"/>
            <button style={{border:'2px solid red', backgroundColor:'blue', color:'white'}}>{buttonText.text2}</button>
        </div>
        );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
