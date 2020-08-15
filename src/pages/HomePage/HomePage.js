import React from "react";
import styles from "./HomePage.module.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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
        <form action="http://localhost:4000/create-trial" method="post">
            <Grid item className={styles.search}>
              <TextField variant="outlined" id = "email" label="Email" placeholder="example@gmail.com" />
              <Button
                variant="contained"
                className={styles.button}
                type="submit"
                disableElevation
              >
                Try PRISE for free!
              </Button>
            </Grid>
        </form>
      </Grid>
      <Footer />
    </div>
  );
};

export default HomePage;
