import React from 'react';
import styles from './ReadingLists.module.css';

interface Book {
  title: string;
  author: string;
}

const currentlyReading: Book[] = [
    { title: 'amerika', author: 'franz kafka' },
    { title: 'gpt-3,building innovative nlp  products', author: 'sandra kublik' },
    { title: 'meditations', author: 'marcus aurelius' },
    { title: 'the republic', author: 'plato' },
    { title: 'generative ai with langchain', author: 'ben aufforth' },
    { title: 'greedy layer-wise training of deep networks ', author: 'y. bengio et al.' },
    { title: 'the waves', author: 'virginia woolf' },
    { title: 'tender is the night', author: 'f. scott fitzgerald' },
    { title: 'mein kampf', author: 'adolf hitler' },
    { title: 'the woman in the dunes', author: 'kouzō okamoto' },
    { title: 'the invisible man', author: 'ralph ellison' },
    { title: 'on the origin of species', author: 'charles darwin' },
  ];
  
  const read: Book[] = [
    { title: 'junie', author: 'erin eckstine' },
    { title: 'batch normalization research paper', author: 's. ioffe, c. szegedy' },
    { title: 'what if cats disappeared from the world', author: 'genki kawamura' },
    
    { title: 'witchcraft for wayward girls', author: 'grady hendrix' },
    { title: 'sisters', author: 'danielle steel' },
    { title: 'NERF: representing scenes as neural radiance fields for view synthesis (2020)', author: 'm. muller et al.' },
    { title: 'the wedding people', author: 'alison espach' },
    { title: 'DDPM: denoising diffusion probabilistic models (2020)', author: 'j. ho et al.' },
    { title: 'VQGAN: taming transformers for high-resolution image synthesis (2021)', author: 'a. ramesh et al.' },
    { title: 'outliers', author: 'malcolm gladwell' },
    { title: 'the road', author: 'cormac mccarthy' },
    
  ];
  
  const wantToRead: Book[] = [
    { title: 'thus spoke zarathustra', author: 'friedrich nietzsche' },
    { title: 'giovanni\'s room', author: 'james baldwin' },
    { title: 'one hundred years of solitude', author: 'gabriel garcía márquez' },
    { title: 'notes from underground', author: 'fyodor dostoevsky' },
    { title: 'norwegian wood', author: 'haruki murakami' },
    { title: 'rashomon', author: 'ryūnosuke akutagawa' },
    { title: 'gpt-3: language models are few-shot learners (2020)', author: 'a. radford et al.' },
    { title: 'clip: learning transferable visual models from natural language supervision (2021)', author: 'a. radford et al.' },
    { title: 'geometric deep learning: grids, groups, graphs, geodesics, and gauges (2021)', author: 'm. bronstein et al.' },
    { title: 'the westing game', author: 'ellen raskin' },
    
  ];
  

const ReadingLists: React.FC = () => {
  return (
    <div className={styles.readingListPage}>
      <h1 className={styles.pageTitle}>reading lists 🌿</h1>

      <p className={styles.subtitle}>
  i read...a lot. below is my reading list for 2025. if you wanna talk about any of these or suggest something cool, feel free to dm me at <a href="https://x.com/tharunikal" target="_blank" rel="noopener noreferrer">x</a>.
</p>

      <section className={styles.section}>
        <h2>currently reading</h2>
        <ul className={styles.bookList}>
          {currentlyReading.map((book, index) => (
            <li key={index} className={styles.bookItem}>
              <span className={styles.icon}>⚫</span>
              <strong>{book.title}</strong> <span>,{book.author}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>read</h2>
        <ul className={styles.bookList}>
          {read.map((book, index) => (
            <li key={index} className={styles.bookItem}>
              <span className={styles.icon}>✅</span>
              <strong>{book.title}</strong> <span>,{book.author}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>wanna read</h2>
        <ul className={styles.bookList}>
          {wantToRead.map((book, index) => (
            <li key={index} className={styles.bookItem}>
              <span className={styles.icon}>✨</span>
              <strong>{book.title}</strong> <span>,{book.author}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ReadingLists;
