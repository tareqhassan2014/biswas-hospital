import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../../utilities/PrivateRoute';
import LoadingComponent from '../custom/LoadingComponent ';

const CosmeticSurgery = React.lazy(() => import('../home/CosmeticSurgery'));
const GeneralSurgery = React.lazy(() => import('../home/GeneralSurgery'));
const Medicine = React.lazy(() => import('../home/Medicine'));
const DentalSurgery = React.lazy(() => import('../home/DentalSurgery '));
const Home = React.lazy(() => import('../../pages/home/Home'));
const SignIn = React.lazy(() => import('../../pages/signIn/SignIn'));
const SignUP = React.lazy(() => import('../../pages/signup/SignUp'));
const Dashboard = React.lazy(() => import('../../pages/dashboard/Dashboard'));
const Appointment = React.lazy(
    () => import('../../pages/appointment/Appointment')
);

const Main = () => {
    return (
        <Suspense fallback={<LoadingComponent />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUP />} />
                <Route path="/*" element={<PrivateRoute />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="appointment" element={<Appointment />} />
                </Route>
                <Route path="/generalSurgery" element={<GeneralSurgery />} />
                <Route path="/dentalSurgery" element={<DentalSurgery />} />
                <Route path="/medicine" element={<Medicine />} />
                <Route path="/cosmeticSurgery" element={<CosmeticSurgery />} />
            </Routes>
        </Suspense>
    );
};

export default Main;
