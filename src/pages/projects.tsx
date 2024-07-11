// pages/projects.tsx

import React from 'react';
import { projects } from '../data/data_projects';
import List from '../components/List';
import styles from '../styles/Projects.module.css'; // Import styles

const Projects: React.FC = () => {
  return (
    <section className={styles['projects-section']}>
      <h2 className={styles['projects-header']}>Projects</h2>
      <ul className={styles['projects-list']}>
        {projects.map((project, index) => (
          <List key={index} title={project.title} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
