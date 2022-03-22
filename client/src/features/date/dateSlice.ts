import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type DateState = {
    date: string;
};

const today = new Date().toISOString();

const slice = createSlice({
    name: 'date',
    initialState: { date: today } as DateState,
    reducers: {
        setDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload;
        },
    },
});

export const { setDate } = slice.actions;
export default slice.reducer;
export const selectCurrentDate = (state: RootState) => state.date.date;
