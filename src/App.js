import logo from './logo.svg';
import './App.css';
import './About-Us.html';

function App() {
  return (
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

  );
}



function CocinaCBHeader() {
  return (<header className="App-header">
  {/* <img src={logo} className="App-logo" alt="logo"/> */}
  <p>Cocina Cibaeña &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <a className="App-link" href="App.js" target="_blank" rel="noopener noreferrer"> Home (React Quick Start) </a> &emsp;
  <a className="App-link" href="https://reactjs.org"> Gallery </a> &emsp;    
  <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Menu</a> &emsp;
  <a className="App-link" href="About-Us.html" target="_blank"> Learn About Us</a> &emsp;
  <a className="App-link" href="https://react.dev/learn" target="_blank" rel="noopener noreferrer"> Order Now! </a> &emsp;

  </p>
</header>);
}


export default App;
