import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type AuthState = {
    user: IUser | null;
    token: string | null;
    status: 'idle' | 'loading' | 'failed';
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

export const { setCredentials } = slice.actions;
export default slice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
