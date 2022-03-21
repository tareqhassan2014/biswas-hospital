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
import { useDispatch } from 'react-redux';
import { Link as DomLink, useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../../../app/services/api';
import { setCredentials } from '../../../features/auth/authSlice';
import useFirebase from '../../../features/auth/firebase/useFirebase';

export default function SignIn() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { firebaseGoogle } = useFirebase();
    const [signUp, { data, isLoading }] = useSignUpMutation();

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
                    Sign in
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={() => console.log('dispatch')}
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
                                {"Don't have an account? Sign Up"}
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
