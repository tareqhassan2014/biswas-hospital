import React from 'react';
import Appointment from '../../components/home/Appointment/Appointment';
import { Banner } from '../../components/home/Banner';
import Departments from '../../components/home/Departments';

const Home = () => {
    return (
        <>
            <Banner />
            <Departments />
            <Appointment />
        </>
    );
};

export default Home;
