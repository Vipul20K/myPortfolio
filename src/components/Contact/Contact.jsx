import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact=()=>{
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to to reach out!</p>
        </div>
        <ul className={styles.links }>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon"/>
                <a href="mailto:vipulkumar0700@gmail.com">vipulkumar0700@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon"/>
                <a href="https://www.linkedin.com/in/vipul-kumar-212445256">linkedin.com/Vipul Kumar</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github icon"/>
                <a href="https://www.github.com/Vipul20K">github.com/Vipul20K</a>
            </li>
        </ul>
    </footer>
  )
} 