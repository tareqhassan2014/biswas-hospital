import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('../../pages/home/Home'));
const SignIn = React.lazy(() => import('../../pages/signIn/SignIn'));
const SignUP = React.lazy(() => import('../../pages/signup/SignUp'));

const Main = () => {
    return (
        <Suspense fallback={<h1> Loading.....</h1>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUP />} />
            </Routes>
        </Suspense>
    );
};

export default Main;