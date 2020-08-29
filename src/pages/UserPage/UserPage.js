import React from "react";
import { Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import styles from "./UserPage.module.scss";

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

const UserPage = ({ children, pageType, message }) => {
    return (
        <div>
            <HeaderExpanded title={pageType} subtitle={message} />
            <Grid container 
                alignItems="stretch"
                className={styles.container}
            >
                <Grid item xs={2}>
                    <LeftNavigation />
                </Grid>
                <Grid container justify="center" xs={10}>
                    <Grid item xs={11}>
                        {/* content of the page goes here */}
                        <Paper
                            elevation={3}
                            className={styles.content}
                        >
                            {children}
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default UserPage;