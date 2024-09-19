import React from "react";
import styles from '../styles/NewProjects.module.css';
import reactLogo from '../images/reactLogo.png';

const newProjects = [
  {
    title: 'Landingpage',
    imgUrl: reactLogo,
    link:'https://github.com/OdaBStorebo/obslandingpage',
  },
  {
    title: 'Bachelor',
    imgUrl: reactLogo,
    link:'https://hvlopen.brage.unit.no/hvlopen-xmlui/handle/11250/3143703',
  }
]

function NewProjects() {
    return(
      <div className={styles.projectGrid}>
        <h2>Prosjekter</h2>
        {newProjects.map((project, index) =>
          <div key={index} className={styles.projectItem}>
            <a href={project.link}>
              <div className={styles.imgWrapper}> 
                <img src={project.imgUrl} alt={project.title} className={styles.projectImage}/>
              </div>
              <p className={styles.projectTitle}>{project.title}</p>
            </a>
          </div> 
        )}
      </div>  
    );
}

export default NewProjects;