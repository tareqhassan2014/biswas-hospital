import { Box, Grid, Link, Typography } from '@mui/material';

function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'red', pb: 2, mt: 5 }}>
            <Grid container sx={{ height: 300, background: 'red' }}>
                <Grid item md={4} xs={12} sx={{ background: 'orange' }}>
                    item
                </Grid>
                <Grid item md={4} xs={12}>
                    item 2
                </Grid>
                <Grid item md={4} xs={12} sx={{ background: 'orange' }}>
                    <div>item</div>
                </Grid>
            </Grid>
            <Copyright sx={{ mt: 2 }} />
        </Box>
    );
};

export default Footer;
