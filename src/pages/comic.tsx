// import React, { useEffect, useState } from 'react';
// import ComicComponent from '../components/ComicComponent'; // Adjust the path as per your project structure

// interface Comic {
//   month: string;
//   num: number;
//   link: string;
//   year: string;
//   news: string;
//   safe_title: string;
//   transcript: string;
//   alt: string;
//   img: string;
//   title: string;
//   day: string;
// }

// const ComicPage: React.FC = () => {
//   const [comicData, setComicData] = useState<Comic | null>(null);

//   useEffect(() => {
//     const fetchComic = async () => {
//       const email = 'l.smirnova@innopolis.university';
//       try {
//         const params = new URLSearchParams({ email });
//         const idResponse = await fetch(
//           `https://fwd.innopolis.university/api/hw2?${params.toString()}`,
//         );

//         if (!idResponse.ok) {
//           throw new Error(`Failed to fetch comic ID: ${idResponse.statusText}`);
//         }

//         const comicId = await idResponse.json();

//         const comicParams = new URLSearchParams({ id: comicId });
//         const comicResponse = await fetch(
//           `https://fwd.innopolis.university/api/comic?id=${comicId}`,
//         );

//         if (!comicResponse.ok) {
//           throw new Error(
//             `Failed to fetch comic data: ${comicResponse.statusText}`,
//           );
//         }

//         const comicData: Comic = await comicResponse.json();
//         setComicData(comicData);
//       } catch (error) {
//         console.error('Error fetching comic data:', error);
//       }
//     };

//     fetchComic();
//   }, []);

//   return (
//     <div>
//       {comicData ? <ComicComponent comicData={comicData} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default ComicPage;

// src/pages/comic.tsx or pages/comic.tsx

import React from 'react';
import ComicComponent from '../components/ComicComponent'; 

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

interface ComicPageProps {
  comicData: Comic; 
}

const ComicPage: React.FC<ComicPageProps> = ({ comicData }) => {
  return (
    <div>
      <ComicComponent comicData={comicData} />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const email = 'l.smirnova@innopolis.university';

    const idResponse = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
    if (!idResponse.ok) {
      throw new Error(`Failed to fetch comic ID: ${idResponse.statusText}`);
    }
    const comicId = await idResponse.json();

    const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    if (!comicResponse.ok) {
      throw new Error(`Failed to fetch comic data: ${comicResponse.statusText}`);
    }
    const comicData: Comic = await comicResponse.json();

    return {
      props: {
        comicData,
      },
    };
  } catch (error) {
    console.error('Error fetching comic data:', error);
    return {
      props: {
        comicData: null,
      },
    };
  }
};

export default ComicPage;
