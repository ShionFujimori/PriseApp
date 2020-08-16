import React, {useState} from "react";
import axios from 'axios';
import styles from "./HomePage.module.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const HomePage = () => {
  const [state, setState] = useState({ email: '' });

  const handleChange = (event) => {
    setState({ email: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (state.email === '') {
        alert('Please enter your email address. (e.g. example@gmail.com)');
        return;
    }

    const data = { email: state.email }

    axios.post('http://localhost:4000/create-trial', data)
      .then(res => {
        console.log(res);
        console.log(res.data);
    });

    setState({email: ''})
  }

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
              <TextField variant="outlined" onChange={handleChange} value={state.email} label="Email" placeholder="example@gmail.com" />
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
