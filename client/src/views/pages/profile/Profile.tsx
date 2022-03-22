import { Avatar, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useAuth } from '../../../Hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    return (
        <Container>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ my: 10 }}
            >
                <Grid item md={12}>
                    <Avatar
                        sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                        alt={user.name}
                        src={user.img}
                    />
                    <Typography variant="h4" align="center" color={'primary'}>
                        {user.name}
                    </Typography>
                </Grid>

                <Grid item md={12} sx={{ my: 3 }}>
                    Name: {user.name} <br />
                    Email: {user.email} <br />
                    Role: {user.role} <br />
                    Status: {user.status} <br />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
