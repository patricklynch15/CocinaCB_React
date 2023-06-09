import logo from './logo.svg';
import './App.css';
//import './Home Page.html';

function App() {
  return (
    //<!DOCTYPE html> //why don't I need this?

    <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <link rel="stylesheet" href="CocinaCB.css" type="text/css" />
    </head>
    <body className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > Home
        </a>        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > Gallery
        </a>        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > Menu
        </a>        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > Order Now!
        </a>
      </header>
    
    </body>
    </html>

  );
}

export default App;
