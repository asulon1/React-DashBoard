
// Import React (Mandatory Step).
import React from "react";
import './button2.css';

  
    // Create a functional component
    const Button2 = (props) => {
        return <button id='button2' onClick={props.callApi}>
         Click here to get a Chuck Norris joke
         </button>;
    }
  
// Export Button Component
export default Button2;

