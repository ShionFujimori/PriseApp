import React from "react";
import { Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";

import styles from "./ProfilePage.module.scss";

import HeaderExpanded from "../../components/HeaderExpanded/HeaderExpanded";

const LeftNavigation = () => {
    return (
            <div className={styles.LeftBar}  >    
                <Link underline="none" className={styles.LeftBarBtn}>
                    <Button 
                    fullWidth="false" 
                    className={styles.LeftBarBtn}
                    >PROFILE</Button>
                </Link>
                    
                <Link underline="none">
                    <Button fullWidth="true" 
                        >Dashboard</Button>
                </Link>
                
                <Link underline="none">
                    <Button fullWidth="true" >Search</Button>
                </Link>
                
                <Link underline="none">
                    <Button fullWidth="true" >Campaigns</Button>
                </Link>
                
                <Link underline="none">
                    <Button fullWidth="true" >Inbox</Button>
                </Link>
                
                <Link underline="none">
                    <Button fullWidth="true" >Reports</Button>
                </Link>
            </div>
    );
};

const RealContent = ({name, address }) => {
    return (
        <Paper
            elevation={3}
            className={styles.content}
        >
            <div className={styles.contentHeader}>
                <div>
                    <h1 
                    className={styles.contentHeaderCompanyName}
                    >{name}</h1>
                    <h3
                    className = {styles.contentHeaderCompanyAddress}>
                        {address}
                    </h3>
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
            <Typography style={{ backgroundColor: '#cfe8fc', height: '25vh' }} />
            <Grid container className={styles.info}>
                <Grid item xs={2} className={styles.infoLink}>
                    <Link underline="none">
                        <Button fullWidth="true"
                        className={styles.button}>Home</Button>
                    </Link>
                    <Link underline="none">
                        <Button fullWidth="true"
                        className={styles.button}>Mission Statement</Button>
                    </Link>
                    <Link underline="none">
                        <Button fullWidth="true"
                        className={styles.button}>Vision</Button>
                    </Link>
                    <Link underline="none">
                        <Button fullWidth="true"
                        className={styles.button}>Members</Button>
                    </Link>
                    <Link underline="none">
                        <Button fullWidth="true"
                        className={styles.button}>Company</Button>
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
        </Paper>
    );
};

const ProfilePage = () => {
    return (
        <div>
            <HeaderExpanded title="PROFILE" subtitle="Welcome Back John Smith" />

            <Grid container 
                alignItems="stretch"
                className={styles.container}
            >
                <Grid item xs={2}>
                    <LeftNavigation />
                </Grid>
                <Grid container justify="center" xs={10}>
                    <Grid item xs={11}>
                        <RealContent name="KPMG" address="www.home.com    Toronto, Ontario  CANADA" />
                    </Grid>
                </Grid>
            </Grid>
        </div>
        
    );
};

export default ProfilePage;