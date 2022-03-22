import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const DentalSurgery = () => {
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
                            Dental surgery
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Blood pressure of Health Chanter
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
                        src="https://i.ibb.co/35bgdjF/General-Surgeons-Facebook-Post-Image.webp"
                        width="60%"
                    />
                </Grid>
                <Container>
                    <Typography variant="h6" gutterBottom>
                        Dental surgery is any of a number of medical procedures
                        that involve artificially modifying dentition; in other
                        words, surgery of the teeth, gums and jaw bones.
                    </Typography>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ mt: 3, fontWeight: '600' }}
                    >
                        Summary
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        There are several types of oral surgery procedures
                        performed each year. Some of the most common include
                        tooth extraction, dental bone grafts, dental implants,
                        periodontal surgery, corrective jaw surgery, sleep apnea
                        surgery and cleft lip and palate repair:
                    </Typography>

                    <li>Extensive tooth decay.</li>
                    <li>Badly broken teeth.</li>
                    <li>Gum disease.</li>
                    <li>Impacted teeth.</li>
                    <li>Missing teeth.</li>
                    <li>Temporomandibular joint disorders (TMD).</li>
                    <li>Bone loss in your jaw.</li>
                    <li>Sleep apnea.</li>
                    <li>Oral cancer.</li>
                    <li>
                        Benign oral pathology (noncancerous lumps or bumps).
                    </li>
                    <Typography variant="subtitle1" sx={{ mt: 3 }}>
                        Dentists inject anesthetic to block sensory transmission
                        by the alveolar nerves. The superior alveolar nerves are
                        not usually anesthetized directly because they are
                        difficult to approach with a needle. For this reason,
                        the maxillary teeth are usually anesthetized locally by
                        inserting the needle beneath the oral mucosa surrounding
                        the teeth. The inferior alveolar nerve is probably
                        anesthetized more often than any other nerve in the
                        body. To anesthetize this nerve, the dentist inserts the
                        needle somewhat beyond the patient's last molar. career.
                    </Typography>
                </Container>
            </Grid>
        </div>
    );
};

export default DentalSurgery;
