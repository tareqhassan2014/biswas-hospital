import { Container, Typography } from '@mui/material';

const Departments = () => {
    return (
        <Container>
            <Typography
                gutterBottom
                variant="h6"
                align="center"
                sx={{ fontWeight: 700, color: 'primary.main' }}
            >
                Departments
            </Typography>
        </Container>
    );
};

export default Departments;
