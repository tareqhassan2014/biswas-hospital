import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const GeneralSurgery = () => {
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
                            General surgery
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
                        src="https://i.ibb.co/JWTDtGp/General-Surgeons-Facebook-Post-Image.webp"
                        width="60%"
                    />
                </Grid>
                <Container>
                    <Typography variant="h6" gutterBottom>
                        General surgery is a surgical specialty that focuses on
                        abdominal contents including the esophagus, stomach,
                        small intestine, large intestine, liver, pancreas,
                        gallbladder, appendix and bile ducts, and often the
                        thyroid gland.
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
                        Terminally ill patients, to include palliative care and
                        pain management; nutritional deficiency; cachexia in
                        patients with malignant and chronic conditions; and
                        counseling and support for end-of-life decisions and
                        care.
                    </li>
                    <li>
                        Morbidly obese patients, to include metabolic
                        derangements; surgical and non-surgical interventions
                        for weight loss (bariatrics); and counseling of patient
                        and families.
                    </li>
                    <li>
                        Geriatric surgical patients, to include management of
                        comorbid chronic diseases.
                    </li>
                    <li>
                        Culturally diverse and vulnerable patient populations.
                    </li>
                    <Typography variant="subtitle1" sx={{ mt: 3 }}>
                        Medical Students who want to be surgeons first apply to
                        a surgical residency program. Once they graduate from
                        medical school they are, officially, a physician, but
                        their education is less than halfway to completion at
                        this point. A surgical residency begins in the first
                        year of residency, which is called the intern year,
                        followed by at least four additional years of surgical
                        training.8 This is the training all surgeons go through
                        on the path to their final surgical career.
                    </Typography>
                </Container>
            </Grid>
        </div>
    );
};

export default GeneralSurgery;
