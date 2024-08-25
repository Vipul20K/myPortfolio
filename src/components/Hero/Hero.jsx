import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero=()=>{
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Vipul</h1>
            <p className={styles.description}>
                I'm a Computer Science Student.<br></br>Reach out if you'd like 
                to learn more!
            </p>
            <a href="mailto:vipulkumar0700@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage2.png")}
          alt="hero image of me" className={styles.heroImg}/>
          <div className={styles.topBlur}></div>
          <div className={styles.bottomBlur}></div>
    </section>
    );
};