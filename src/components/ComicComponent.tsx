import React from 'react';
import styles from '../styles/Comic.module.css'; // Import CSS module

interface ComicProps {
  comicData: {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
  };
}

const ComicComponent: React.FC<ComicProps> = ({ comicData }) => {
  const comicReleaseDate = new Date(
    parseInt(comicData.year),
    parseInt(comicData.month) - 1,
    parseInt(comicData.day),
  );

  return (
    <div className={styles['comic-container']}>
      <h2 className={styles['comic-header']}>Random XKCD Comic</h2>
      <div className={styles['comic-content']}>
        <img
          id="comic_img"
          src={comicData.img}
          alt={comicData.alt}
          className={styles['comic-img']}
        />
        <h3 id="comic_title" className={styles['comic-title']}>
          {comicData.safe_title}
        </h3>
        <p id="comic_date" className={styles['comic-date']}>
          {comicReleaseDate.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ComicComponent;
