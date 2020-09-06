import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import styles from "./SearchPage.module.scss";

const SearchPage = () => {
    
    return(
        <div className={styles.content}>
            <div>
                <TextField
                    fullWidth
                    placeholder="University of Toronto"
                    label="Search Universities, Organizations, and Events"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </div>

            
            <div>
                <h1 className={styles.contentSearchHeader}>FILTER RESULTS</h1>
                
                <Grid container className = {styles.info}>

                    <Grid item xs={4} >
                        <Button fullWidth="true" variant="outlined" >
                            Universities
                        </Button>
                    </Grid>

                    <Grid item xs={4} >
                        <Button fullWidth="true" variant="outlined">
                            Organizations
                        </Button>
                    </Grid>

                    <Grid item xs={4}>
                        <Button fullWidth="true" variant="outlined">
                            Events
                        </Button>
                    </Grid>

                </Grid>

                <h1 className={styles.contentSearchHeader}>DETAILS</h1> 
                {/* TOOD: Figure out how to write "INTERESTS" with spaces after "DETAILS" */}
                
                <Grid container className = {styles.info} >

                    <Grid item xs={2} className={styles.option}>
                        <Button fullWidth="true" variant="outlined" className={styles.button}>
                            Location
                        </Button>
                    </Grid>

                    <Grid item xs={2} className={styles.option}>
                        <Button fullWidth="true" variant="outlined" className={styles.button}>
                            Categories
                        </Button>
                    </Grid>

                    <Grid item xs={2}> 
                    </Grid>

                    <Grid item xs={2} className={styles.option}>
                        <Button fullWidth="true" variant="outlined" className={styles.button}>
                            Types
                        </Button>
                    </Grid>

                    <Grid item xs={2} className={styles.option}>
                        <Button fullWidth="true" variant="outlined" className={styles.button}>
                            Social
                        </Button>
                    </Grid>

                    <Grid item xs={2} className={styles.option}>
                        <Button fullWidth="true" variant="outlined" className={styles.button}>
                            Brands
                        </Button>
                    </Grid>

                </Grid>

                <h1 className={styles.contentSearchHeader}>PROFILE</h1>
                
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox/>}
                        label="Active Organizations"
                    />
                    
                    <FormControlLabel
                        control={<Checkbox/>}
                        label="Newest Organizations"
                    />

                    <FormControlLabel
                        control={<Checkbox/>}
                        label="High Rated Profiles"
                    />
                </FormGroup>
                
                <div >
                    <Grid
                        justify = "space-between"
                        container
                    >
                        <Grid item>
                            <Button className={styles.button} variant="outlined">
                                Clear Filters
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button className={styles.button} variant="outlined" align="right">
                                Filter
                            </Button>
                        </Grid>

                    </Grid>
                    
                </div>
                
            </div>

            

            <Box className={styles.result}>
                <Grid container>
                    
                    {/* TODO: replace Typography with Cards*/}

                    <Grid item xs={4}>
                        <Container>
                            <Typography style={{ backgroundColor: "#cfe8fc", height: "14vh" }}>
                                <span className={styles.circle}> </span>

                                <h1  > Consulting Assoc</h1>
                            </Typography>

                            <Typography style={{ backgroundColor: "#DFE2EA", height: "40vh" }}>
                                <br></br>
                                <h4> Paragraph explaining the company</h4>
                            </Typography>

                        </Container>
                    </Grid>

                    <Grid item xs={4}>
                        <Container>
                            <Typography style={{ backgroundColor: "#cfe8fc", height: "14vh" }}>
                                <span className={styles.circle}> </span>

                                <h1  > CS Student Assoc</h1>
                            </Typography>

                            <Typography style={{ backgroundColor: "#DFE2EA", height: "40vh" }}>
                                <br></br>
                                <h4> Paragraph explaining the company</h4>
                            </Typography>

                        </Container>
                    </Grid>

                    <Grid item xs={4}>
                        <Container>
                            <Typography style={{ backgroundColor: "#cfe8fc", height: "14vh" }}>
                                <span className={styles.circle}> </span>

                                <h1  > Digital Media Assoc</h1>
                            </Typography>

                            <Typography style={{ backgroundColor: "#DFE2EA", height: "40vh" }}>
                                <br></br>
                                <h4> Paragraph explaining the company</h4>
                            </Typography>

                        </Container>
                    </Grid>

                </Grid>

            </Box>
            
        </div>
    );
    
};

export default SearchPage;