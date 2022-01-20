import React from "react";
import Navbar from "./components/Navbar";

// import {Cards, CountryPicker, Chart} from './pages/Covid-tracker/components';


import "./index.css";
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import Weather from "./pages/Weather";
import Joke from "./pages/joke";
import ChuckNorrisJoke from "./pages/ChuckNorrisJoke";
import Map from "./pages/Map";
import Chat from "./pages/Chat";
import Pokemon from "./pages/Pokemon";
import Movie from "./pages/Movie";
import CovidTracker from "./pages/Covid-tracker/CovidTracker";
import Bitcoin from "./pages/Bitcoin";



function App() {
  return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/products' element={<Products />} />
                <Route path='/weather' element={<Weather />} />
                <Route path='/joke' element={<Joke />} />
                <Route path='/chucknorrisjoke' element={<ChuckNorrisJoke />} />
                <Route path='/map' element={<Map />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/Pokemon' element={<Pokemon />} />
                <Route path='/Movie' element={<Movie />} />
                <Route path='/CovidTracker' element={<CovidTracker />} />
                <Route path='/bitcoin' element={<Bitcoin />} />
            </Routes>
        </Router>
  );
}

export default App;
