import { useMemo } from 'react';
import { selectCurrentUser } from '../features/auth/authSlice';
import { useTypedSelector } from './store';

export const useAuth = () => {
    const user = useTypedSelector(selectCurrentUser);

    return useMemo(() => ({ user }), [user]);
};
