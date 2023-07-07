import logo from './logo.svg';
import './App.css';
import './Components/About-Us.js';
import './Components/Header.js';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (

    <Router>
    <html lang="en">

    <head>
      <meta charset="UTF-8" />
    </head>
    <body className="App">

    <CocinaCBHeader></CocinaCBHeader>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <center>
      <table class="mainPageDisplay">
        <tr>
          <td>
            <img src={require("./Food Pics/Main Menu 3 45 ratio.jpeg")} class="blue-flag-square" alt="main dish 1"/>
          </td>
          <td>
            <img src={require("./Food Pics/Main Menu 1 45 ratio.jpeg")} class="red-flag-square" alt="main dish 2"/>
          </td>
        </tr>
        <tr>
          <td>
            <img src={require("./Food Pics/Main Menu 4 45 ratio.jpeg")} class="red-flag-square" alt="main dish 3"/>
          </td>
          <td>
            <img src={require("./Food Pics/Main Menu 6 45 ratio.jpeg")} class="blue-flag-square" alt="main dish 4"/>
          </td>
        </tr>

      </table>
      </center>
      

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
       

    </body>
    </html>
    </Router>

  );
}



export default App;
