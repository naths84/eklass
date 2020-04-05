import { auth } from 'config/firebase';

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @param {string} displayName 
 */
const createUserWithEmailAndPassword = async (email, password, displayName) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);

    const currentUser = await auth.currentUser;

    // TODO: Fix the following, set the user display name
    // https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile
    await currentUser.updateProfile({
      displayName: displayName
    });

    return {
      type: 'success',
      message: `User created with uid: ${currentUser.uid}`,
      user: user,
    }
  } catch (error) {
    console.error(error);
    return {
      type: 'error',
      code: error.code,
      message: error.message
    }
  }
}

export default createUserWithEmailAndPassword;