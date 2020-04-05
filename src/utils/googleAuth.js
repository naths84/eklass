import firebase, { auth } from 'config/firebase';

const handleGoogleAuth = async () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  try {
    await auth.signInWithPopup(provider);
  } catch (error) {
    console.error(error);
  }
}

export default handleGoogleAuth;