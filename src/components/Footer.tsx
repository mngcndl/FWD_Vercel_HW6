// src/components/Footer.tsx
import styles from '../styles/Footer.module.css';

import ghPhoto from '@/assets/github-icon.png';
import tgPhoto from '@/assets/telegram-icon.png';
import mailPhoto from '@/assets/gmail-icon.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/mngcndl" target="_blank" rel="noopener noreferrer">
        <Image src={ ghPhoto } alt="GitHub" className={styles.icon} />
      </a>
      <a href="https://t.me/mangocandle" target="_blank" rel="noopener noreferrer">
        <Image src={ tgPhoto } alt="Telegram" className={styles.icon} />
      </a>
      <a href="mailto:sldycpex@gmail.com" target="_blank" rel="noopener noreferrer">
        <Image src={ mailPhoto } alt="Email" className={styles.icon} />
      </a>
    </footer>
  );
};

export default Footer;
