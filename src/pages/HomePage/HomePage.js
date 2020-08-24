import React from "react";
import styles from "./HomePage.module.scss";
import Grid from "@material-ui/core/Grid";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Grid container className={styles.content}>
        <h1 className={styles.contentMessage1}>Sponsorship</h1>
        <h1 className={styles.contentMessage2}>
          Get connected with your ideal partner
        </h1>
        <h1 className={styles.contentMessage3}>
          Connects student organizations and companies to sponsorship + branding
          opportunities
        </h1>
        <Grid item className={styles.search}>
          <TextField variant="outlined" />
          <Button
            variant="contained"
            className={styles.button}
            disableElevation
          >
            Try PRISE for free!
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default HomePage;
