import React from 'react';
import './App.css';
import {Matrix} from './components/woo';
import Home from './components/home';
import CssBaseline from '@material-ui/core/CssBaseline';




function App() {
    return (
        <>
            <CssBaseline/>
            <Home/>
            <Matrix/>
            <h2 style={{color:"white"}}>Hi, I'm Nika</h2>

        </>

    );
}

export default App;
