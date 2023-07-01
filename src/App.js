//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <link rel="stylesheet" href="CocinaCB.css" type="text/css" />
    </head>
    <body className="App">

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo"/> */}
        <p>Cocina Cibaeña &emsp; &emsp;&emsp; &emsp;&emsp; &emsp; <a className="App-link" href="https://react.dev/learn" target="_blank" rel="noopener noreferrer"> Home (React Quick Start) </a> &emsp;
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Gallery </a> &emsp;    
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Menu</a> &emsp;
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Order Now! </a> &emsp;

        </p>
      </header>
    
      <table>
        <tr>
          <td>
            <img src={require("./Food Pics/Spread 1.jpeg")} alt="Fish 3"/>
          </td>
          <td>
            <img src={require("./Food Pics/Pork 2.jpeg")} alt="Fish 3"/>
          </td>
        </tr>
        <tr>
          <td>
            <img src={require("./Food Pics/Fish 8.jpeg")} alt="Fish 3"/>
          </td>
          <td>
            <img src={require("./Food Pics/Plate 3.jpeg")} alt="Fish 1"/>
          </td>
        </tr>

      </table>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
       

    </body>
    </html>

  );
}

function MyDropdown() {
  return (
    <menu id="Dropdown">Soon to be Dropdown menu</menu>
  );
}

// function Slideshow() {

//   return;
// }

export default App;
