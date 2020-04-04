import React, { useEffect } from 'react';
import {Router} from '@reach/router';
import { useDocumentData, useDocument } from 'react-firebase-hooks/firestore';

import firebase, { db } from './config/firebase';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import Class from './components/Class/Class';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Subject from './components/Subjects/Subjects';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

import './App.css';
import Homepage from './components/Homepage/Homepage';

function App() {
  const [value, loading, error] = useDocument(
    // firebase.firestore().doc('fooCollection/3HUA9W19DOf1yHdOM0DL'),
    db.doc('fooCollection/3HUA9W19DOf1yHdOM0DL'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (error) {
      console.error(error);
    } else if (!loading && value) {
      console.log(value.data());
    } else {
      console.log('loading');
    }
  }, [value, loading, error])

  return (
    <div className="App">
      <Header />
      <Router>
        <Homepage path="/" />
        <Subject path="/subject"/>
        <Class path="/class/:id" />
        <About path="/about" />
        <Contact path="/contact" />
        <Login path="/login" />
        <SignUp path="/signup" />
      </Router>
      <Footer />
      {/* {value && <p>{JSON.stringify(value.data())}</p>} */}
    </div>
  );
}

export default App;
