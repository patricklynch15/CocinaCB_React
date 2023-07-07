import logo from './logo.svg';
import './App.css';
import './About-Us.js';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


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
  <a className="App-link" href="About-Us.js"> Learn About Us</a> &emsp;
  <Link to="About-Us.js" className="App-link"> Learn About Us </Link>
  <a className="App-link" href="https://react.dev/learn" target="_blank" rel="noopener noreferrer"> Order Now! </a> &emsp;

  </p>
</header>);
}

/*function ExternalElement() {
  return (
<div class="rc-h-box display-flex " style="align-items: center; flex-flow: row nowrap; flex: 0 0 auto; justify-content: flex-start; height: 100%;">
  <a style="height: 100%;">
<div class="rc-v-box display-flex " style="align-items: stretch; flex-flow: column nowrap; flex: 0 0 auto; justify-content: flex-start; height: 100%;">
<div class="rc-gap " style="flex: 1 1 auto;">

</div>
<div class="rc-h-box display-flex " style="align-items: center; border-right: 0.5px solid rgb(255, 255, 255); font-size: 16px; flex-flow: row nowrap; flex: 0 0 auto; justify-content: flex-start; padding-right: 30px; padding-left: 30px; height: 25px;">
<img src="img/icon-all-selected.png"></img>
<div class="rc-gap " style="flex: 0 0 8px; width: 8px;">
</div>
<span style="color: rgb(133, 233, 243); font-weight: 600; width: 110px;">Open Requests</span>
</div>
<div class="rc-gap " style="flex: 1 1 auto;"></div>
</div>
</a>
<a style="height: 100%;">
<div class="rc-v-box display-flex " style="align-items: stretch; flex-flow: column nowrap; flex: 0 0 auto; justify-content: flex-start; height: 100%;">
<div class="rc-gap " style="flex: 1 1 auto;"></div>
<div class="rc-h-box display-flex " style="align-items: center; border-right: 0.5px solid rgb(255, 255, 255); font-size: 16px; flex-flow: row nowrap; flex: 0 0 auto; justify-content: flex-start; padding-right: 30px; padding-left: 30px; height: 25px;">
<img src="img/icon-calendar.png">
  <div class="rc-gap " style="flex: 0 0 8px; width: 8px;">
</div><span style="color: rgb(255, 255, 255); font-weight: normal; width: 100px;">Commitments</span>
</div>
<div class="rc-gap " style="flex: 1 1 auto;">
  </div>
  </div>
  </a>
  <a href="https://support.swingeducation.com/hc/en-us#state" target="_blank" class="help-center" style="height: 100%;">
    <div class="rc-v-box display-flex " style="align-items: stretch; flex-flow: column nowrap; flex: 0 0 auto; justify-content: flex-start; height: 100%;">
      <div class="rc-gap " style="flex: 1 1 auto;">

      </div>
      <div class="rc-h-box display-flex " style="align-items: center; border-right: 0.5px solid rgb(255, 255, 255); font-size: 16px; flex-flow: row nowrap; flex: 0 0 auto; justify-content: flex-start; padding-right: 30px; padding-left: 30px; height: 25px;">
        <img src="img/icon-help.png"></img>
          <div class="rc-gap " style="flex: 0 0 8px; width: 8px;"></div>
          <span style="color: rgb(255, 255, 255); font-weight: normal; width: 87px;">Help Center</span>
          </div>
          <div class="rc-gap " style="flex: 1 1 auto;"></div>
          </div>
          </a>
          <a style="height: 100%;">
            <div class="rc-v-box display-flex " style="align-items: stretch; flex-flow: column nowrap; flex: 0 0 auto; justify-content: flex-start; height: 100%;">
              <div class="rc-gap " style="flex: 1 1 auto;">
              </div>
              <div class="rc-h-box display-flex " style="align-items: center; border-right: 0.5px solid rgb(255, 255, 255); font-size: 16px; flex-flow: row nowrap; flex: 0 0 auto; justify-content: flex-start; padding-right: 30px; padding-left: 30px; height: 25px;">
                <img src="img/icon-book.png"></img>
                  <div class="rc-gap " style="flex: 0 0 8px; width: 8px;">

                  </div>
                  <span style="color: rgb(255, 255, 255); font-weight: normal; width: 78px;">Resources</span>
                  </div>
                  <div class="rc-gap " style="flex: 1 1 auto;">

                  </div>
                  </div>
                  </a>
                  <div>
                    <div class="rc-box display-flex " style="flex-flow: inherit; flex: 0 0 auto; position: relative;">
                      <a>
                        <div class="rc-h-box display-flex " style="align-items: center; flex-flow: row nowrap; flex: 0 0 auto; justify-content: flex-start; padding-right: 30px; padding-left: 32px; height: 80px;">
                          <img src="https://res.cloudinary.com/swingeducation/image/upload/w_150/v1682300805/cbisekgwemlegr39eibi.jpg" width="30pxpx" height="30pxpx" style="clip-path: circle(15px at 50% 50%);">
                            <div class="rc-gap " style="flex: 0 0 10px; width: 10px;">
                              </div>
                              <span style="font-size: 16px;">Patrick</span>
                              <div class="rc-gap " style="flex: 0 0 10px; width: 10px;">
                                </div>
                                <img src="/img/icon-downarrow@2x.png">
                                  </div>
                                  </a>
                                  </div>
                                  </div>
                                  </div>
  );
}*/

export default App;
