// Import React (Mandatory Step).
import React from "react";
// Import ReactDOM (Mandatory Step).
import ReactDOM from "react-dom";
  
// Import The Button Component from Button.js 
import Button2 from "./Components/button2";
  
const rootElement = document.getElementById("root");
  
// Create a functional component
const Joke =() => {
    // Declare a state variable
    const [Joke, setJoke] = React.useState("");
  
    const fetchApi =() => {
        // Fetching data from the API
            fetch("http://api.icndb.com/jokes/random")
            // https://sv443.net/jokeapi/v2/joke/Programming?type=single
            // http://api.icndb.com/jokes/random
            .then((res) => res.json())
            .then((data) => setJoke(data.value.joke));
            console.log (Joke);
      };
  
    return (
        // Return the Button Component with a conditional statement
        <div>{Joke === "" ? <Button2 callApi={fetchApi} /> : 
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