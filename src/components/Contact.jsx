import React from "react";
import { Phone, Mail } from 'lucide-react';
import styles from '../styles/Contact.module.css';

function Contact() {
    return(
      <div className={styles.contactContainer}>
        <div className={styles.contactElem}>
          <a href="tel:+4740622222" className={styles.contactLink}>
            <div className={styles.iconCircle}>
              <Phone size={16}/>
            </div>
            406 22 222
          </a>
        </div>
        <div className={styles.contactElem}>
          <a href="mailto:oda.bastesen.storebo@gmail.com" className={styles.contactLink}>
          <div className={styles.iconCircle}>
            <Mail size={16}/>
          </div>
            oda.bastesen.storebo@gmail.com
          </a>
        </div>
      </div>  
    );
}

export default Contact;