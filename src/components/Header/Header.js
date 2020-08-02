import React from "react";
import styles from "./Header.module.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <Grid className={styles.top} justify="space-between">
      <Grid item>
        <Typography className={styles.logo}>PRISE</Typography>
      </Grid>
      <Grid item>
        <Navbar />
      </Grid>
    </Grid>
  );
};

export default Header;
