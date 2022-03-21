import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import initFirebase from './firebase.init';

//initialize firebase authentication
initFirebase();

const useFirebase = () => {
    //auth
    const auth = getAuth();

    //login with google

    const firebaseGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const { user } = await signInWithPopup(auth, provider);

            return user;
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    //Create User with email and password

    const createUser = async (
        email: string,
        password: string,
        name: string
    ) => {
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateProfile(user, { displayName: name });
            return { ...user, displayName: name };
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    // login with email and password

    const loginUser = async (email: string, password: string) => {
        try {
            const { user } = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            return user;
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    return { firebaseGoogle, loginUser, createUser };
};

export default useFirebase;
