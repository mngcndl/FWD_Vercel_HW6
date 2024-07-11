import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import '../styles/Header.module.css';
import '../styles/Footer.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Here you can find some info about me"
        />
        <link rel="icon" href="/favicon.png" />
        <meta name="author" content="Liubov Smirnova" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
