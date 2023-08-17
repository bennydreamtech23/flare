import React from "react";
import Link from "next/link";
import Styles from "../styles/Home.module.scss";
const ThanksPage = () => {
  return (
    <div className={Styles.ThankyouContainer}>
      <h1>Thank You for Subscribing!</h1>
      <p>We appreciate your interest in our content.</p>
      <p>Stay tuned for updates and valuable information.</p>
      <p>Please continue to enjoy our content</p>
      <Link href="/">Back to home</Link>.
    </div>
  );
};

export default ThanksPage;
