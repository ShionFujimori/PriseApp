import React from "react";
import Header from "../../components/Header/Header";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import { Drawer, Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "./ProfilePage.module.scss";

//TODO: make an scss file
//figure out how to lay buttons on top of each other w/o using div
const ProfilePage = () => {
  return (
    <div>
      <ProfileHeader />
      <Grid container alignItems="stretch" className={styles.content}>
        {/* Leftside Panel*/}
        <Grid item xs={1} className={styles.contentLeftBar}>
          <Link underline="none">
            <Button fullWidth="false" className={styles.contentLeftBar}>
              Profile
            </Button>
          </Link>

          <Link underline="none">
            <Button fullWidth="true">Dashboard</Button>
          </Link>

          <Link underline="none">
            <Button fullWidth="true">Search</Button>
          </Link>

          <Link underline="none">
            <Button fullWidth="true">Campaigns</Button>
          </Link>

          <Link underline="none">
            <Button fullWidth="true">Inbox</Button>
          </Link>

          <Link underline="none">
            <Button fullWidth="true">Reports</Button>
          </Link>
        </Grid>

        {/* Middle Panel */}
        <Grid item xs={7}>
          <Container>
            <h1 className={styles.contentCompanyName}>ABC Consulting Firm</h1>

            <h3 className={styles.contentCompanyAddress}>
              www.home.com Toronto, Ontario CANADA
            </h3>

            <Typography
              style={{ backgroundColor: "#cfe8fc", height: "25vh" }}
            />
          </Container>
        </Grid>

        {/* Right Panel*/}
        <Grid item xs={4} className={styles.contentRightBar}>
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
        </Grid>

        {/* Left Panel 2 (empty) */}
        <Grid item xs={1}></Grid>

        {/* Middle Panel 2a Buttons */}
        <Grid item xs={2} className={styles.contentMiddleBar}>
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

        {/* Middle Panel 2b Buttons*/}
        <Grid item xs={5} sm={5} className={styles.contentMiddleText}>
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
    </div>
  );
};

export default ProfilePage;
