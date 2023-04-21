import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import NoMatch from "./NoMatch";
import About from "./About";
import Photos from "./Photos";
import Header from "./components/Header";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/photos' element={<Photos />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </>
    );
};

export default App;