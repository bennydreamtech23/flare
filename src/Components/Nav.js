import Link from "next/link";
import React, { useState } from "react";
import Styles from "../styles/Nav.module.scss";
import { BsTiktok, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
function Nav() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/johnanastasia25@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Email: email,
            _subject: "Subscribe to newsletter",
            _captcha: true,
            _template: "box",
          }),
        }
      );

      const data = await response.json();
      if (data.success === "true") {
        console.log("Subscription successful");
        setEmail("");
      } else {
        console.log("Subscription failed");
        setEmail("")
      }
    } catch (error) {
      console.error(error);
      console.log("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <header className={Styles.navBar}>
      <div className={Styles.topBar}>
        <div className={Styles.iconGroup}>
          <BsTwitter className={Styles.icon} />
          <BsInstagram className={Styles.icon} />
          <BsYoutube className={Styles.icon} />
          <BsTiktok className={Styles.icon} />
        </div>
        <div>
          <form onSubmit={handleSubmit} className={Styles.searchGroup}>
            <input
              type="email"
              value={email}
              placeholder="Subscribe"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? (
                "Loading..."
              ) : (
                <AiOutlineArrowRight className={Styles.icon} />
              )}
            </button>
          </form>
        </div>
      </div>

      <div className={Styles.siteTitle}>
        <Link href={"/"} className={Styles.siteHeading}>
          <h1>Flare</h1>
        </Link>
      </div>
    </header>
  );
}

export default Nav;
