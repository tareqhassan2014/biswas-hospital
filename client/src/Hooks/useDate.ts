import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentDate } from '../features/date/dateSlice';

export const useDate = () => {
    const date = useSelector(selectCurrentDate);

    return useMemo(() => ({ date }), [date]);
};
