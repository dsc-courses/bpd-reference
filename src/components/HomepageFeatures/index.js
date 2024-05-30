import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures() {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.course}>
                    <h1>DSC 10: Principles of Data Science</h1>
                    <p>(4)</p>
                </div>
                <p className={styles.description}>
                    This first course in data science introduces students to data exploration, statistical inference,
                    and prediction. It introduces Python programming language as a tool for tabular data manipulation,
                    visualization, and simulation. Through homework assignments and projects, students are given an
                    opportunity to develop their analytical skills while working with real-world datasets from a variety
                    of domains.
                </p>
                <div className={styles.imageContainer}>
                    <img src="img/dsc10graph.png" alt="DSC 10 Chart" className={styles.image}/>
                </div>
            </div>
        </section>
    );
}