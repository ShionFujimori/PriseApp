import React from "react";
import styles from "./ProfileHeader.module.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';

const ProfileHeader = () => {
  return (
    <Grid className={styles.top}>
        <Typography className={styles.logo}>PRISE</Typography>
        <Avatar className={styles.avatar}/>
    </Grid>
  );
};

export default ProfileHeader;
