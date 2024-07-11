// pages/skills.tsx

import React from 'react';
import { skills } from '../data/data_skills';
import List from '../components/List';
import styles from '../styles/Skills.module.css'; // Import styles

const Skills: React.FC = () => {
  return (
    <section className={styles['skills-section']}>
      <h2 className={styles['skills-header']}>Skills</h2>
      <ul className={styles['skills-list']}>
        {skills.map((skill, index) => (
          <List key={index} title={skill.title} />
        ))}
      </ul>
    </section>
  );
};

export default Skills;
