import React from  'react';
import styles from './HomePage.module.css';

function HomePage(){
    const name="THARUNIKA L ";

    return(
        <div className={styles.homePage}>
            <h1>
                hey there,it's
            </h1>
            <h2> <span>{styles.name}{name}</span></h2>
            <p>i love coding , absolutely</p>
        </div>
    );
}

export default HomePage;