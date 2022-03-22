import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type AuthState = {
    user: IUser;
    token: string | null;
    status: 'idle' | 'loading' | 'failed';
};

const user = {
    name: '',
    email: '',
    id: '',
    role: '',
    status: '',
    img: '',
};

const slice = createSlice({
    name: 'auth',
    initialState: { user, token: null, status: 'idle' } as AuthState,
    reducers: {
        setCredentials: (
            state,
            {
                payload: { user, token },
            }: PayloadAction<{ user: IUser; token: string }>
        ) => {
            state.user = user;
            state.token = token;
            state.status = 'idle';
        },

        logOut: (state) => {
            state.user = user;
            state.token = null;
            state.status = 'idle';
        },
    },
});

export const { setCredentials, logOut } = slice.actions;
export default slice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
