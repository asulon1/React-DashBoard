// Import React (Mandatory Step).
import React from "react";
// Import ReactDOM (Mandatory Step).
import ReactDOM from "react-dom";
  
// Import The Button Component from Button.js 
import Button from "./Components/button";
  
const rootElement = document.getElementById("root");
  
// Create a functional component
const Joke =() => {
    // Declare a state variable
    const [Joke, setJoke] = React.useState("");
  
    const fetchApi =() => {
        // Fetching data from the API
            fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
      };
  
    return (
        // Return the Button Component with a conditional statement
        <div>{Joke === "" ? <Button callApi={fetchApi} /> : 
<p>{Joke}</p>
}</div>
      );
}
  
// Rendering the App Component.
ReactDOM.render(
    <Joke />,
  rootElement
);
export default Joke