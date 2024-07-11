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
        <title>My Personal Website</title>
        <meta name="description" content="My personal website built with Next.js" />
        <meta name="author" content="Liubov Smirnova" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
