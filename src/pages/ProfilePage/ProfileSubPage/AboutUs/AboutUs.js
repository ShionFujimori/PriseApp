import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import styles from "./AboutUs.module.scss";

const AboutUs = (props) => {
  return (
    <>
        <h1>MISSION</h1>
        <p>Here is the mission statement</p>
        <br></br>
        <br></br>
        <br></br>

        <h2>VISION</h2>
            <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <hr></hr>
        <br></br>
        <br></br>
        <br></br>

        <h2>Members</h2>
        <Grid container>
            <Grid item xs={4}>
                <div className={styles.circle}></div>
            </Grid>
            <Grid item xs={4}>
                <div className={styles.circle}></div>
            </Grid>
            <Grid item xs={4}>
                <div className={styles.circle}></div>
            </Grid>
        </Grid>

        <br></br>
        <br></br>
        <br></br>

        <h2>Organization</h2>
        
        <h3 className={styles.company}>ABC Consulting Firm</h3>
        <br></br>
        <p>Toronto, Ontario</p>
        <br></br>
        <p>www.home.com</p>
        <br></br>
        <p>Founded in 2016</p>
    </>
  );
};

export default AboutUs;
