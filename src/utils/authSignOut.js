import { auth } from 'config/firebase';

const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
  }
};

export default signOut;