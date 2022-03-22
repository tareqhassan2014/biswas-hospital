import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link as DomLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLoginMutation, useSignUpMutation } from '../../../app/services/api';
import { setCredentials } from '../../../features/auth/authSlice';
import useFirebase from '../../../features/auth/firebase/useFirebase';

type Inputs = {
    email: string;
    password: string;
};

export default function SignIn() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { firebaseGoogle } = useFirebase();
    const [signUp, { data, isLoading }] = useSignUpMutation();
    const [login] = useLoginMutation();

    const [show, setShow] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            toast.info('Waiting for response');
            const user = await login(data).unwrap();
            toast.success('successfully login');
            dispatch(setCredentials({ user: user.data, token: user.token }));
            reset();
            navigate('/');
        } catch (error) {
            toast.warning('Something went wrong.');
        }
    };

    const googleSignup = async () => {
        const user = await firebaseGoogle();

        if (user?.displayName && user?.email) {
            const data = await signUp({
                name: user?.displayName,
                email: user?.email,
                phone: user?.phoneNumber ?? '+8801988781886',
                img: user?.photoURL ?? 'https://i.ibb.co/dBQjP3N/profile.png',
            }).unwrap();

            dispatch(setCredentials({ user: data.data, token: data.token }));

            navigate('/');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        error={Boolean(errors.email)}
                        label={
                            Boolean(errors.email) ? 'Error' : 'Email Address'
                        }
                        helperText={errors.email?.message}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        autoComplete="email"
                        {...register('email', {
                            required: 'Email is required',
                        })}
                    />
                    <TextField
                        error={Boolean(errors.password)}
                        label={Boolean(errors.password) ? 'Error' : 'Password'}
                        helperText={errors.password?.message}
                        margin="normal"
                        required
                        fullWidth
                        type={show ? 'text' : 'password'}
                        id="password"
                        autoComplete="current-password"
                        {...register('password', {
                            required: 'password is required',
                        })}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Show password"
                        onClick={() => setShow(!show)}
                    />
                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        loading={false}
                    >
                        Sign In
                    </LoadingButton>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <DomLink to={'/signup'}>
                                {'New here? Sign UP'}
                            </DomLink>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg>
                            <Button
                                variant="outlined"
                                startIcon={<GoogleIcon />}
                                sx={{ py: 1, px: 20, my: 3 }}
                                size="large"
                                onClick={() => googleSignup()}
                            >
                                Google
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
