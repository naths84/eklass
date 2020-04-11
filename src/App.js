import React from 'react';
import {Router} from '@reach/router';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from 'config/firebase';

import Header from 'components/Header/Header';
// import Footer from './components/Footer/Footer';

// Pages
import About from 'pages/About/About';
import Contact from 'pages/Contact/Contact';
import Homepage from 'pages/Homepage/Homepage';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import Quiz from 'pages/Quiz/Quiz';
import Team from 'pages/Team/Team';

import styles from './App.module.css';

function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      <Header user={user} />

      <Router className={styles.wrapper}>
        <Homepage path="/*" />
        <About path="/about" />
        <Team path="/team"/>
        <Contact path="/contact" />

        <Quiz path="/quiz/*" />

        <Login path="/login" />
        <SignUp path="/signup" />
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
