import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Departments.css';

const Departments = () => {
    return (
        <Fragment>
            <div className="row department">
                <Grid
                    container
                    xs={12}
                    md={6}
                    sx={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <Grid
                        item
                        className="row col-md-8 col-sm-10 backgroundDp"
                        xs={10}
                        md={8}
                    >
                        <Link to="/generalSurgery" className="link">
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#00778a',
                                }}
                            >
                                <Box className="col-3">
                                    <img
                                        className="imageDp"
                                        alt="item.title"
                                        loading="lazy"
                                        src="https://i.ibb.co/9ZmZsVB/image3.png"
                                        width="60%"
                                    />
                                </Box>
                                <Box className="col-6">
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        component="div"
                                    >
                                        General Surgery
                                    </Typography>
                                </Box>
                                <Box className="col-3">
                                    <ArrowForwardIcon />
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                    <Grid
                        item
                        className="row col-md-8 col-sm-10 backgroundDp"
                        xs={10}
                        md={8}
                    >
                        <Link to="/dentalSurgery" className="link">
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#00778a',
                                }}
                            >
                                <Box className="col-3">
                                    <img
                                        className="imageDp"
                                        alt="item.title"
                                        loading="lazy"
                                        src="https://i.ibb.co/grtW5DJ/image2.png"
                                        width="60%"
                                    />
                                </Box>
                                <Box className="col-6">
                                    <Typography variant="h6" component="div">
                                        Dental Surgery
                                    </Typography>
                                </Box>
                                <Box className="col-3">
                                    <ArrowForwardIcon />
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                    <Grid
                        item
                        className="row col-md-8 col-sm-10 backgroundDp"
                        xs={10}
                        md={8}
                    >
                        <Link to="/medicine" className="link">
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#00778a',
                                }}
                            >
                                <Box className="col-3">
                                    <img
                                        className="imageDp"
                                        alt="item.title"
                                        loading="lazy"
                                        src="https://i.ibb.co/0ryVZNd/image4.png"
                                        width="60%"
                                    />
                                </Box>
                                <Box className="col-6">
                                    <Typography variant="h6" component="div">
                                        Medicine
                                    </Typography>
                                </Box>
                                <Box className="col-3">
                                    <ArrowForwardIcon />
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                    <Grid
                        item
                        className="row col-md-8 col-sm-10 backgroundDp"
                        xs={10}
                        md={8}
                    >
                        <Link to="/cosmeticSurgery" className="link">
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#00778a',
                                }}
                            >
                                <Box className="col-3">
                                    <img
                                        className="imageDp"
                                        alt="item.title"
                                        loading="lazy"
                                        src="https://i.ibb.co/0tN0r8m/image1.png"
                                        width="60%"
                                    />
                                </Box>
                                <Box className="col-6">
                                    <Typography variant="h6" component="div">
                                        Plastic & Cosmetic Surgery
                                    </Typography>
                                </Box>
                                <Box className="col-3">
                                    <ArrowForwardIcon />
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                </Grid>
                <Grid className="col-md-6 col-sm-12"></Grid>
            </div>
        </Fragment>
    );
};

export default Departments;
