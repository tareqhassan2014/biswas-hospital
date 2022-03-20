import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import { api } from './services/api';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        [api.reducerPath]: api.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
