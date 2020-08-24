import React from "react";
import styles from "./ProfileHeader.module.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const ProfileHeader = () => {
  return (
    <Grid container className={styles.top} justify="space-between">
      <Grid>

      </Grid>
      <Grid item>
        <Typography className={styles.logo}>Profile</Typography>
        <Typography className={styles.regText}>Welcome back John Smith </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
