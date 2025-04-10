// import React from 'react';
import styles from './Blogs.module.css';

const blogs = [
  {
    title: 'Why RAG is the Future of AI Applications',
    date: 'March 15, 2025',
    description: 'An overview of Retrieval-Augmented Generation, its architecture, and why it’s a game changer for scalable, context-aware AI.',
    link: 'https://tharunikal.medium.com/cache-friendly-programming-how-memory-access-patterns-can-make-or-break-performance-3aa0db17da4a',
  },
  {
    title: 'Reducing Latency in Inference: Lessons from Practice',
    date: 'February 22, 2025',
    description: 'Tips and architecture decisions that helped bring down latency by 30% for multi-modal inference models.',
    link: 'https://yourbloglink.com/inference-latency',
  },
  {
    title: 'Deploying Clean AI Systems on a Budget',
    date: 'January 10, 2025',
    description: 'A cost-efficient roadmap to deploy optimized AI models without cloud overkill.',
    link: 'https://yourbloglink.com/ai-budget-deploy',
  },
];

function BlogsPage() {
  return (
    <div className={styles.blogsPage}>
      <h1>some of my blogs</h1>
      <ul className={styles.blogList}>
        {blogs.map((blog, index) => (
          <li key={index} className={styles.blogItem}>
            <h3>
                <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.blogLink}
                >
                    ✦ {blog.title}
                </a>
            </h3>

            <p className={styles.blogMeta}>Published on: {blog.date}</p>
            <p className={styles.blogDesc}>{blog.description}</p>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogsPage;
