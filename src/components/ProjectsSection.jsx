import React from 'react';
import styles from '../styles/ProjectsSection.module.css';

const projects = [
  {
    name: "Learnerhunt",
    description: "Learnerhunt provides career counseling and college info for UG, PG and professional courses.",
    link: "https://www.learnerhunt.co/",
    image: "/assets/images/learnerhunt.png",
    category: "Professional Work",
  },
  {
    name: "ZIIEI",
    description: "An educational initiative to improve teaching methods.",
    // link: "https://www.ziiei.com",
    link: "https://play.google.com/store/apps/datasafety?id=com.ip.ziiei&hl=en_IE&gl=US",
    image: "/assets/images/ZIIEI.png",
    category: "Professional Work",
  },
  {
    name: "Edupreneur Village",
    description: "An EdTech ecosystem for investment and growth of educational startups in India and abroad.",
    // link: "https://edupreneurvillage.com",
    link: "",
    image: "/assets/images/EV.png",
    category: "Professional Work",
  },
  {
    name: "Auro Scholar",
    description: "Auro Scholar is an educational program that offers free quizzes and monthly scholarships to students in grades 1–12",
    link: "https://auroscholar.org",
    image: "/assets/images/Auroscholar.png",
    category: "Professional Work",
  },

];

const ProjectsSection = () => {

  const professionalWork = projects.filter(project => project.category === "Professional Work");
  const independentProjects = projects.filter(project => project.category === "Independent Projects");

  return (
    <section id='projects' className={styles.projectsSection}>
      <h2 className={styles.projectsHeading}>My Projects</h2>


      <div className={styles.projectsCategory}>
        {/* <h3 className={styles.categoryHeading}>Professional Works</h3>  */}
        <div className={styles.projectsGrid}>
          {professionalWork.map((project, index) => (
            <div className={styles.projectItem} key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <div className={styles.projectImageContainer}>
                  <img src={project.image} alt={project.name} className={styles.projectImage} />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <button target="blank" className={styles.ctaButton}>View Project</button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>


      {/* <div className={styles.projectsCategory}>
        
         <h3 className={styles.categoryHeading}>Independent Projects</h3> 
        <div className={styles.projectsGrid}>
          {independentProjects.map((project, index) => (
            <div className={styles.projectItem} key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <div className={styles.projectImageContainer}>
                  <img src={project.image} alt={project.name} className={styles.projectImage} />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                </div>
                <button className={styles.ctaButton}>View Project</button>
              </a>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default ProjectsSection;
