import React from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";


export const Experience = ()=>{
    return (
       <section className={styles.container} id="experience">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill,id)=>{
                    return(
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>

                            </div>
                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
        {/* <ul>
            {history.map((historyItem,id) =>{
                return(
                    <li key={id}>
                        <img src={getImageUrl(historyItem.imageSrc)}
                        alt={`${historyItem.organisation} Logo`}
                        />
                        <div>
                            <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                        </div>
                    </li>
                )
            })}
        </ul> */}
       </section>
    )
}