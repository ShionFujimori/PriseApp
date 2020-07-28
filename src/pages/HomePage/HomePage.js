import React from "react";
import styles from "./HomePage.module.scss";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../components/Navbar/Navbar";
import Typography from "@material-ui/core/Typography";
import Footer from "../../components/Footer/Footer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const HomePage = () => {
    return (
        <div className={styles.root}>
            <Grid 
                container 
                className={styles.top}
                justify="space-between"
            >
                <Grid item>
                    <Typography className={styles.logo}>PRISE</Typography>
                </Grid>
                <Grid item>
                    <Navbar /> 
                </Grid>
            </Grid>
            <Grid 
                container 
                className={styles.content}
            >
                <h1 className={styles.contentMessage1}>Sponsorship</h1>
                <h1 className={styles.contentMessage2}>Get connected with your ideal partner</h1>
                <h1 className={styles.contentMessage3}>Connects student organizations and companies to sponsorship + branding opportunities</h1>
            </Grid>
            <Grid className={styles.search}>
                    <TextField variant="outlined"/>
                    <Button variant="contained" className={styles.button} disableElevation>
                        Try PRISE for free!
                    </Button>
            </Grid>
            <Footer />
        </div>
    );
};

export default HomePage;