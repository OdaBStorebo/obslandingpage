import { useState } from "react";
import styles from '../styles/About.module.css';
import profileImage from '../images/meg.jpg';

function About() {
  
    return(
      <div className={styles.aboutContainer}>
        <div className={styles.align}>
          <img src={profileImage} alt="Bilde av Oda" className={styles.picture}/>
            <div className={StyleSheet.name}>
              <h1>Oda</h1>
              <h1 className={styles.nameIndent}>Bastesen</h1>
              <h1>Storebø</h1>
            </div>  
        </div>      
        <article>
              <p>
                Hei og velkommen til min landingpage.
                Jeg er utdannet dataingeniør ved Høgskulen på Vestlandet i 2024, 
                og har igjennom studiet fått god kjennskap til Java. 
                Jeg driver for tiden å spesialiserer meg innenfor web- og applikasjonsutvikling. 
              </p>
              <p>
              Jeg er intressert å lære mer om brukeropplevelse og brukerinteraksjon.
                På denne siden finner du min kontaktinformasjon og mine prosjekter.
                Nettsiden er under utvikling.
              </p>
        </article>  
      </div>
    );
}

export default About;