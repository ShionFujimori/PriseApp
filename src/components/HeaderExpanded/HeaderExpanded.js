import React from "react";
import styles from "./HeaderExpanded.module.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';


const HeaderExpanded = ({title, subtitle}) => {
  return (
    <Grid className={styles.top}>
      <div className={styles.header}>
        <Typography className={styles.logo}>PRISE</Typography>
        <div className={styles.icons}>
            <NotificationsIcon className={styles.bell} fontSize="large"/>
            <EmailIcon  className={styles.mail} fontSize="large"/>
            <Avatar className={styles.avatar}/>
        </div>
      </div>
      <div className={styles.expanded}>
            <div className={styles.expandedTitle}>{title}</div>
            <div className={styles.expandedSubtitle}>{subtitle}</div>
      </div>
    </Grid>
  );
};

export default HeaderExpanded;
