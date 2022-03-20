import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Avatar,
    Box,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link as DomLink, useNavigate } from 'react-router-dom';
import initFirebase from '../../../features/auth/firebase/firebase.init';
import { useAppDispatch } from '../../../Hooks/store';

interface ILoginFormData {
    email: string;
    password: string;
}
initFirebase();

const auth = getAuth();

const googleLogin = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(auth, provider);
        console.log(
            {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            },
            user
        );
    } catch (error) {
        console.log(error);
    }
};

export default function SignIn() {
    const dispatch = useAppDispatch();
    let navigate = useNavigate();

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
                        onClick={() => googleLogin()}
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
                </Box>
            </Box>
        </Container>
    );
}
