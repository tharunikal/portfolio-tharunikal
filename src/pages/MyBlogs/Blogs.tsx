import React from 'react';
import styles from './Blogs.module.css';

interface Blog {
  title: string;
  link: string;
  date: string;
}
// const blogs: Blog[] = [
//   {
//     title: 'Test Link',
//     link: 'https://www.google.com',
//     date: 'April 25, 2025',
//   },
// ];

const blogs: Blog[] = [
  {
    title: 'cache friendly programming',
    link: 'https://tharunikal.medium.com/cache-friendly-programming-how-memory-access-patterns-can-make-or-break-performance-3aa0db17da4a',
    date: 'Feb 7 , 2025',
  },
  {
    title: 'mull it over - advent of code',
    link: 'https://tharunikal.medium.com/advent-of-code-day-3-mull-it-over-1df3d041c941',
    date: 'Dec 3 , 2024',
  },
  {
    title: 'trisentis tosca',
    link: 'https://dev.to/tharunikal/tricentis-tosca-a-powerful-tool-for-continuous-testing-528b',
    date: 'Nov 7 , 2024',
  },
  // Add more blogs here
];

interface BlogPostProps {
  blog: Blog;
}

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
  return (
    <li className={styles.blogItem}>
      <h3>
        <a href={blog.link} target="_blank" rel="noopener noreferrer">
          {blog.title}
        </a>
      </h3>
      <span className={styles.blogMeta}>{blog.date}</span>
    </li>
  );
};

const BlogPage: React.FC = () => {
  return (
    <div className={styles.blogsPage}>
      <h1>blogs</h1>
      <ul className={styles.blogList}>
        {blogs.map((blog, index) => (
          <BlogPost key={index} blog={blog} />
        ))}
      </ul>
      <div>
      <p className={styles.compilingIdeasHeading}>compiling ideas...</p>
      </div>
    </div>
  );
};

export default BlogPage;