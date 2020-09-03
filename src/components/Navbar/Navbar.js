import React from "react";
import styles from "./Navbar.module.scss";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link underline="none">
        <Button className={styles.button}>Discover</Button>
      </Link>
      <Link underline="none">
        <Button className={styles.button}>How It Works</Button>
      </Link>
      <Link underline="none">
        <Button className={styles.button}>Support</Button>
      </Link>
      <Link underline="none">
        <Button className={styles.button}>Pricing</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
