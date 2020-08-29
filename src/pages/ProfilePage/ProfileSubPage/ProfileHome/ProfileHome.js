import React from "react";
import { Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./ProfileHome.module.scss";

const ProfileHome = ({ organization, address }) => {
  return (
    <>
      <div className={styles.contentHeader}>
        <div>
          <h1 className={styles.contentHeaderCompanyName}>{organization}</h1>
          <h3 className={styles.contentHeaderCompanyAddress}>{address}</h3>
        </div>
        <div>
          <Link underline="none">
            <Button className={styles.button}>Home</Button>
          </Link>
          <Link underline="none">
            <Button className={styles.button}>About Us</Button>
          </Link>
          <Link underline="none">
            <Button className={styles.button}>Members</Button>
          </Link>
          <Link underline="none">
            <Button className={styles.button}>Campaigns</Button>
          </Link>
        </div>
      </div>
      <Typography style={{ backgroundColor: "#cfe8fc", height: "25vh" }} />
      <Grid container className={styles.info}>
        <Grid item xs={2} className={styles.infoLink}>
          <Link underline="none">
            <Button fullWidth="true" className={styles.button}>
              Home
            </Button>
          </Link>
          <Link underline="none">
            <Button fullWidth="true" className={styles.button}>
              Mission Statement
            </Button>
          </Link>
          <Link underline="none">
            <Button fullWidth="true" className={styles.button}>
              Vision
            </Button>
          </Link>
          <Link underline="none">
            <Button fullWidth="true" className={styles.button}>
              Members
            </Button>
          </Link>
          <Link underline="none">
            <Button fullWidth="true" className={styles.button}>
              Company
            </Button>
          </Link>
        </Grid>
        <Grid item xs={10}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileHome;
