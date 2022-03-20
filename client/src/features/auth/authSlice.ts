import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { RootState } from '../../app/store';
import initFirebase from './firebase/firebase.init';

type AuthState = {
    user: IUser | null;
    token: string | null;
};

const slice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null } as AuthState,
    reducers: {
        setCredentials: (
            state,
            {
                payload: { user, token },
            }: PayloadAction<{ user: IUser; token: string }>
        ) => {
            state.user = user;
            state.token = token;
        },
    },
});

initFirebase();
const auth = getAuth();

const googleLogin = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
    } catch (error) {
        console.log(error);
    }
};

// export const googleLogin = () => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(setCredentials())
//     }, 1000)
//   }
// }

export const { setCredentials } = slice.actions;
export default slice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
