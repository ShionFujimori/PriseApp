import React, { useState } from "react";
import axios from "axios";
import styles from "./HomePage.module.scss";
import Grid from "@material-ui/core/Grid";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const HomePage = () => {
  const [trialEmail, setTrialEmail] = useState({ email: "" });

  const handleChange = (event) => {
    setTrialEmail({ email: event.target.value });
  };

  // TODO: error checking; check if the email address is valid
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert message when the user input is empty
    if (trialEmail.email === "") {
      alert("Please enter your email address (e.g. example@gmail.com)");
      return;
    }
    const data = { email: trialEmail.email };
    axios.post("http://localhost:4000/create-trial", data).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    // when the submission is valid
    setTrialEmail({ email: "" });
    alert(
      "Thank you for entering your email address! A confirmation email is on the way."
    );
  };

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
        <form onSubmit={handleSubmit}>
          <Grid item className={styles.search}>
            <TextField
              variant="outlined"
              onChange={handleChange}
              value={trialEmail.email}
              label="Email"
              placeholder="example@gmail.com"
            />
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
