import React from "react";
import styles from "./SignUpPage.module.scss";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import SignUpOrg from "./SignUpSubPage/SignUpOrgPage/SignUpOrg";

const SignUpPage = () => {
  return (
    <div className={styles.root}>
      <ProfileHeader />
      <SignUpOrg/>
    </div>
  );
};

export default SignUpPage;