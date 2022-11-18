


import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import BulletinBoard from './BulletinBoard/BulletinBoard'
import Confirmation from './Confirmation/Confirmation'
import Login from './Login/Login'
import Navbar from './Navbar/Navbar'
import Info from './Info'
import Kontakt from './Kontakt'
import VotingScheme from './VotingScheme/VotingScheme'
import { Context } from "./Context";
import { useState } from 'react';  
import Home from './Home/Home'
import IndividualResult from './BulletinBoard/IndividualResult'
import Invitation from './letter/Invitation'
import ResultNotification from './letter/ResultNotification'

function App() {
  const pathname = window.location.pathname;
  const [voted, setVoted] = useState(false);

  return (
    <div className="App">
        <div id="app-main">

        <Context.Provider value={{voted, setVoted}}>

              <BrowserRouter basename='/qr-verification'>
      <Navbar/>
                <Routes>
                  <Route exact path="/" element={<Navigate to="qr-verification/individualresult" /* Should be referencing the main screen *//>}/>
                  <Route exact path="/qr-verification/invitation" element={<Invitation/>}/>
                  <Route exact path="/qr-verification/home" element={<Home />}/>
                  <Route exact path="/qr-verification/login" element={<Login />}/>
                  <Route exact path="/qr-verification/voting" element={<VotingScheme />}/>
                  <Route exact path="/qr-verification/confirmation" element={<Confirmation />}/>
                  <Route exact path="/qr-verification/bulletinboard" element={<BulletinBoard />}/>
                  <Route exact path="/qr-verification/individualresult" element={<IndividualResult />}/>
                  <Route exact path="/qr-verification/info" element={<Info />}/>
                  <Route exact path="/qr-verification/kontakt" element={<Kontakt />}/>
                  <Route exact path="/qr-verification/invitation" element={<Invitation />}/>
                  <Route exact path="/qr-verification/resultnotification" element={<ResultNotification />}/>
                </Routes>
              </BrowserRouter>
              </Context.Provider>
            </div>
    </div>
  );
}



export default App;

