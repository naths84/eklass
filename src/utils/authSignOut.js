import { auth } from 'config/firebase';

const signOut = () => {
  auth.signOut().then(function() {
    console.log('signed out');
    // Sign-out successful.
  }).catch(function(error) {
    console.error(error)
    // An error happened.
  });
};

export default signOut;