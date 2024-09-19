import { useState } from "react";
import styles from '../styles/About.module.css';
import profileImage from '../images/meg.jpg';

function About() {
  const [isOpen, setIsOpen] = useState(false);

    return(
      <article>
        <h3>Om meg</h3>
          <img src={profileImage} alt="Bilde av Oda" className={styles.picture}/>
          <p className={isOpen ? styles.expanded :  styles.clamped}>
          Hei og velkommen til min landingpage.
          Jeg er straks ferigutdannet dataingeniør og ønsker å drive med web- og applikasjonsutvikling. 
          Jeg er veldig intressert å lære mer om brukeropplevelse og brukerinteraksjon.
          På denne siden finner du min kontaktinformasjon og mine prosjekter.
          </p>
            <button className={styles.readMoreBtn} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? 'Les mindre' : 'Les mer'}
            </button>
      </article>  
    );
}

export default About;