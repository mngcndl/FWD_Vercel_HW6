import React from 'react';
import { GetServerSideProps } from 'next';

interface Comic {
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
}

interface ComicProps {
  comicData: Comic;
}

const ComicComponent: React.FC<ComicProps> = ({ comicData }) => {
  const comicReleaseDate = new Date(
    parseInt(comicData.year),
    parseInt(comicData.month) - 1,
    parseInt(comicData.day)
  );

  return (
    <div className="comic_container">
      <h2 className="comic_header">Random XKCD Comic</h2>
      <div className="comic_content">
        <img id="comic_img" src={comicData.img} alt={comicData.alt} />
        <h3 id="comic_title">{comicData.safe_title}</h3>
        <p id="comic_date">{comicReleaseDate.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const email = 'l.smirnova@innopolis.university';
  const idResponse = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
  const comicId = await idResponse.json();
  const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
  const comicData: Comic = await comicResponse.json();

  return {
    props: { comicData }
  };
};

export default ComicComponent;
