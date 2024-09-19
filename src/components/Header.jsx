import React from "react";
import styles from '../styles/Header.module.css';
import { ChevronDown } from 'lucide-react';

function Header() {
    return(
        <div className={styles.header}> 
            <div className={styles.txtBox}>    
                <h1 className={styles.headerTxt}>Oda</h1>
                <h1 className={styles.headerTxt}>Bastesen</h1>
                <h1 className={styles.headerTxt}>Storebø</h1>
                <h2 className={styles.headerTxt}>Dataingeniør</h2>
                <ChevronDown className={styles.downButton}/>
            </div>
        </div>
    );
}

export default Header;