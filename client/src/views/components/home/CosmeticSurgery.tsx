import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Departments.css';

const CosmeticSurgery = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid
                    className=""
                    item
                    xs={12}
                    sx={{
                        background: 'teal',
                        height: '200px',
                        display: 'grid',
                        alignItems: 'center',
                    }}
                >
                    <div className="CosmeticSurgeryHedText">
                        <Typography
                            className="HedText"
                            variant="h3"
                            component="div"
                            gutterBottom
                        >
                            Plastic & Cosmetic Surgery
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Medical Specialty of Health Chanter
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid
                    className="cosmeticImg"
                    item
                    xs={12}
                    sx={{ mt: 4, mb: 2 }}
                >
                    <img
                        alt="item.title"
                        loading="lazy"
                        src="https://i.ibb.co/2tn52CQ/plastic-reconstructive-and-cosmetic-surgery-1.jpg"
                        width="60%"
                    />
                </Grid>
                <Container>
                    <Typography variant="h6" gutterBottom>
                        Plastic surgery is a surgical specialty involving the
                        restoration, reconstruction, or alteration of the human
                        body. It can be divided into two main categories:
                        reconstructive surgery and cosmetic surgery.
                        Reconstructive surgery includes craniofacial surgery,
                        hand surgery, microsurgery, and the treatment of burns.
                    </Typography>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ mt: 3, fontWeight: '600' }}
                    >
                        Summary
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Surgeons can reshape the appearance of body parts
                        through cosmetic surgery. Some of the most common body
                        parts people want to improve through surgery include:
                    </Typography>

                    <li>
                        Breasts: Increase or reduce the size of breasts or
                        reshape sagging breasts
                    </li>
                    <li>
                        Ears: Reduce the size of large ears or set protruding
                        ears back closer to the head
                    </li>
                    <li>
                        Eyes: Correct drooping upper eyelids or remove puffy
                        bags below the eyes
                    </li>
                    <li>Face: Remove facial wrinkles, creases or acne scars</li>
                    <li>Hair: Fill in balding areas with one's own hair</li>
                    <li>Tummy: Flatten the abdomen</li>
                    <li>Nose: Change the shape of the nose</li>
                    <Typography variant="subtitle1" sx={{ mt: 3 }}>
                        The procedures, techniques, and principles of cosmetic
                        surgery are entirely focused on enhancing a patient’s
                        appearance. Improving aesthetic appeal, symmetry, and
                        proportion are the key goals. An aesthetic surgery can
                        be performed on all areas of the head, neck, and body.
                        Since cosmetic procedures treat areas that function
                        properly, cosmetic surgery is designated as elective.
                        Cosmetic elective procedures are performed by doctors
                        from a variety of medical fields, including plastic
                        surgeons.
                    </Typography>
                </Container>
            </Grid>
        </div>
    );
};

export default CosmeticSurgery;
