import React, { useState } from "react";
import Style from "../styles/SubsribeForm.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SubscribeForm = () => {
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
        toast.success("Subscription successful");
        setEmail("");
      } else {
        toast.error("Subscription failed");
        setEmail("");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={Style.form}>
        <input
          placeholder="Subscribe"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : <AiOutlineArrowRight />}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SubscribeForm;
