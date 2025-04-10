// src/pages/Projects/ProjectsPage.tsx

// import React from 'react';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Projects.module.css';

const projects = [
  {
    name: 'Legal Ease AI',
    description: 'Offline Legal Document Analyzer leveraging RAG',
    githubLink: 'https://github.com/tharunikal/legal-ease.git',
  },
  {
    name: 'Inference Optimization',
    description: '30% reduction in latency for text and image models by deploying inference servers',
    githubLink: 'https://github.com/tharunikal/inference-optimization.git',
  },
  {
    name: 'C-Numpy',
    description: 'Replicated core numpy features in C',
    githubLink: 'https://github.com/tharunikal/CNumpy.git',
  },
  {
    name: 'Web App Translators',
    description: 'A quick translational tool.',
    githubLink: 'https://github.com/tharunikal/web-app-trans.git',
  },
];

function ProjectsPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.projectsPage}>
      <h1>some of my works</h1>
      <Slider {...settings} className={styles.projectCarousel}>
        {projects.map((project, index) => (
          <div key={index} className={styles.carouselItem}>

        <h3>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </h3>

            <p>{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              view it on github
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectsPage;
