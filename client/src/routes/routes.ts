import { lazy } from 'react';

const UserDashboard = lazy(
    () => import('../views/pages/dashboards/UserDashboard')
);
const AdminDashboard = lazy(
    () => import('../views/pages/dashboards/AdminDashboard')
);
const CosmeticSurgery = lazy(
    () => import('../views/components/home/CosmeticSurgery')
);
const GeneralSurgery = lazy(
    () => import('../views/components/home/GeneralSurgery')
);
const DentalSurgery = lazy(
    () => import('../views/components/home/DentalSurgery')
);
const Appointment = lazy(
    () => import('../views/pages/appointment/Appointment')
);

const Medicine = lazy(() => import('../views/components/home/Medicine'));
const Profile = lazy(() => import('../views/pages/profile/Profile'));
const SignIn = lazy(() => import('../views/pages/signIn/SignIn'));
const SignUP = lazy(() => import('../views/pages/signup/SignUp'));
const Home = lazy(() => import('../views/pages/home/Home'));

export const protectedRoutes = [
    {
        path: 'profile',
        element: Profile,
        role: ['user', 'admin', 'doctor'],
    },
    {
        path: 'appointment',
        element: Appointment,
        role: ['user', 'admin', 'doctor'],
    },
    {
        path: 'dashboard',
        element: AdminDashboard,
        role: ['admin'],
    },
    {
        path: 'dashboard',
        element: UserDashboard,
        role: ['user'],
    },
];

export const openRoutes = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/home',
        element: Home,
    },
    {
        path: '/login',
        element: SignIn,
    },
    {
        path: '/signup',
        element: SignUP,
    },
    {
        path: '/medicine',
        element: Medicine,
    },
    {
        path: '/dentalSurgery',
        element: DentalSurgery,
    },
    {
        path: '/generalSurgery',
        element: GeneralSurgery,
    },
    {
        path: '/cosmeticSurgery',
        element: CosmeticSurgery,
    },
];
