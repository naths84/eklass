import React, { useEffect } from 'react';
import {Router} from '@reach/router';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useDocumentData, useDocument } from 'react-firebase-hooks/firestore';

import { db, auth } from './config/firebase';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Homepage from './components/Homepage/Homepage';
import Subjects from './components/Subjects/Subjects';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

import './App.css';

function App() {
  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    console.log('user', user);
    console.log('loading : ', loading);
    console.log('error', error);
  }, [user, loading, error])

  return (
    <div className="App">
      <Header user={user} />
      <Router>
        <Homepage path="/" />
        <Subjects path="/class/:classId"/>
        <About path="/about" />
        <Contact path="/contact" />
        <Login path="/login" />
        <SignUp path="/signup" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
