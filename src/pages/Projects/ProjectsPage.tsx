// import React from 'react';
import styles from './Projects.module.css';

// Define your project data
const projects = [
  {
    name: 'Project 1',
    description: 'A brief explanation of Project 1.',
    githubLink: 'https://github.com/your-username/project1',
  },
  {
    name: 'Project 2',
    description: 'A concise one-liner about Project 2.',
    githubLink: 'https://github.com/your-username/project2',
  },
  {
    name: 'Awesome Tool',
    description: 'A tool that helps you do amazing things.',
    githubLink: 'https://github.com/your-username/awesome-tool',
  },
  // Add more projects here
];

function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <h1>My Projects</h1>
      <ul className={styles.projectList}>
        {projects.map((project, index) => (
          <li key={index} className={styles.projectItem}>
            <a
              href={project.githubLink}
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank"
            >
              {project.name}
            </a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;