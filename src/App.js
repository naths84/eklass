import React from 'react';
import {Router} from '@reach/router';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from './config/firebase';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Homepage from './components/Homepage/Homepage';
import Subjects from './components/Subjects/Subjects';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Quiz from './components/Quiz/Quiz';
import Team from './components/Team/Team';
import QuizSetup from './components/QuizSetup/QuizSetup';
import styles from './App.module.css';

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className={styles.App}>
      <Header user={user} />

      <Router>
        <Homepage path="/" />
        <Subjects path="/class/:classId"/>
        <Quiz path="/quiz"/>
        <Team path="/team"/>
        <About path="/about" />
        <Contact path="/contact" />
        <Login path="/login" />
        <SignUp path="/signup" />
        <Quiz path="/quiz/:competenceId/:nbOfQuestions" />
        <QuizSetup path="/quizSetup/:subjectId"/>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
