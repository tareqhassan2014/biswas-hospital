import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import TextField from '@mui/material/TextField';
import isWeekend from 'date-fns/isWeekend';
import { useDispatch } from 'react-redux';
import { setDate } from '../../../features/date/dateSlice';
import { useDate } from '../../../Hooks/useDate';

const Calender = () => {
    const dispatch = useDispatch();

    const { date } = useDate();

    const setDateOnState = (date: Date) => {
        dispatch(setDate(date.toISOString()));
    };

    return (
        <LocalizationProvider
            sx={{ background: 'transparent' }}
            dateAdapter={AdapterDateFns}
        >
            <StaticDatePicker<Date>
                orientation="landscape"
                openTo="day"
                value={date}
                shouldDisableDate={isWeekend}
                onChange={(date) => date && setDateOnState(date)}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default Calender;
