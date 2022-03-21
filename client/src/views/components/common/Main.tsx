import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../../utilities/PrivateRoute';
const Home = React.lazy(() => import('../../pages/home/Home'));
const SignIn = React.lazy(() => import('../../pages/signIn/SignIn'));
const SignUP = React.lazy(() => import('../../pages/signup/SignUp'));
const Dashboard = React.lazy(() => import('../../pages/dashboard/Dashboard'));

const Main = () => {
    return (
        <Suspense fallback={<h1> Loading.....</h1>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUP />} />
                <Route path="/*" element={<PrivateRoute />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default Main;
