import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Appointment.css';

enum GenderEnum {
    female = 'female',
    male = 'male',
    other = 'other',
}
interface IFormInput {
    firstName: string;
    email: string;
    age: string;
    gender: GenderEnum;
    city: string;
    message: string;
    phone: number;
}
const Appointment = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    return (
        <Fragment>
            <div
                className=""
                style={{
                    background: 'black',
                    color: 'white',
                    textAlign: 'left',
                }}
            >
                <Container sx={{ pt: 4, pb: 5 }}>
                    <div style={{ width: '60%' }}></div>
                    <div className="" style={{ width: '50%', padding: '20px' }}>
                        <Typography
                            className="textApp"
                            variant="h3"
                            component="div"
                        >
                            A Patient-First Approach to
                        </Typography>
                        <Typography
                            className="textApp"
                            variant="h3"
                            component="div"
                        >
                            Cancer Treatment
                        </Typography>
                        <Typography
                            variant="body1"
                            gutterBottom
                            component="div"
                        >
                            Comprehensive Cancer Care management powered by
                            multi-disciplinary team, clinical excellence,
                            world-class technology and international protocols
                        </Typography>
                        <Link to="/appointment">
                            <button className="button-18" role="button">
                                Book an Appointment
                            </button>
                        </Link>
                    </div>
                </Container>
            </div>
            <div className="">
                <Container className="AboutApp" sx={{ pt: 5, pb: 5 }}>
                    <Typography className="textApp" variant="h4" sx={{ pb: 2 }}>
                        About HCG Cancer Centre
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center' }}>
                        At HCG, it has been our venture to redefine the future
                        of healthcare through specializing in cancer care and
                        advanced diagnosis. About 275 specialists work with HCG
                        - The specialists in Cancer care. We have engaged in a
                        constant endeavor to mold the future of healthcare in
                        India by designing, building and managing healthcare
                        centers with a steadfast vision of bringing core
                        clinical services under one roof. Our intent is to help
                        patients achieve a longer and better life. With a
                        network of 24 cancer centers across India, HCG makes
                        advanced cancer care accessible to millions of people.
                        At HCG we offer all modalities of Cancer treatment with
                        the most advanced state-of- art technologies under a
                        single roof.
                    </Typography>
                </Container>
                <Container sx={{ display: 'grid', justifyItems: 'center' }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography
                            className="Consultation"
                            variant="h4"
                            sx={{ fontSize: '1.25rem', fontWeight: '600' }}
                        >
                            Book an Appointment or Virtual Consultation
                        </Typography>
                        <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                        >
                            Please fill in the form and submit the details to
                            request an appointment.
                        </Typography>
                    </Box>
                    <Box sx={{ pt: 5, pb: 5, width: '80%' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box className="dFlex">
                                <Box
                                    sx={{ display: 'grid', p: 2 }}
                                    className="w50"
                                >
                                    <input
                                        className="textFlt"
                                        placeholder="Peasant Name *"
                                        {...register('firstName', {
                                            required: true,
                                            maxLength: 20,
                                        })}
                                    />
                                    <input
                                        className="textFlt"
                                        placeholder="Peasant Age *"
                                        {...register('age', {
                                            required: true,
                                            maxLength: 20,
                                        })}
                                    />
                                    <select
                                        className="textFlt"
                                        placeholder="Select Grander *"
                                        {...register('gender')}
                                    >
                                        <option value="Select Grander *">
                                            Select Grander *
                                        </option>
                                        <option value="male">male</option>
                                        <option value="other">other</option>
                                    </select>
                                </Box>
                                <Box
                                    sx={{ display: 'grid', p: 2 }}
                                    className="w50"
                                >
                                    <input
                                        placeholder="Phone No *"
                                        className="textFlt"
                                        {...register('phone', {
                                            required: true,
                                            maxLength: 20,
                                        })}
                                    />
                                    <input
                                        placeholder="Email *"
                                        className="textFlt"
                                        {...register('email')}
                                    />
                                    <select
                                        className="textFlt"
                                        {...register('city')}
                                    >
                                        <option value="Select Grander *">
                                            Select Your City *
                                        </option>
                                        <option value="male">Dhaka</option>
                                        <option value="other">Barisal</option>
                                        <option value="male">Khulna</option>
                                        <option value="other">Comilla</option>
                                        <option value="male">Rajsahi</option>
                                        <option value="other">other</option>
                                    </select>
                                </Box>
                            </Box>
                            <Box sx={{ pl: 2, pr: 2 }}>
                                <textarea
                                    className="w100 messageBox"
                                    {...register('message')}
                                    placeholder="Your Message"
                                />
                            </Box>
                            <Box sx={{ p: 2 }}>
                                <input type="submit" className="w100 submit" />
                            </Box>
                        </form>
                    </Box>
                </Container>
            </div>
        </Fragment>
    );
};

export default Appointment;
