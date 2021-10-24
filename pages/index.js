import { useRef } from 'react';
import Head from 'next/head';
import Projects from './projects';
import styles from '../styles/Home.module.css';
import GitHubLogo from '../public/GitHubLogo.png';
import LinkedInLogo from '../public/LinkedInLogo.png';

export default function Home() {
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const projectRef = useRef();

  return (
    <div className={styles.container}>
      <Head>
        <title>Carter Chavez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Carter Chavez</h1>
        <div className={styles.images}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/carter-chavez-37a18964/"
          >
            <img src={LinkedInLogo} />
          </a>
          <a target="_blank" href="https://github.com/CaptainNemo7">
            <img src={GitHubLogo} />
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi. I'm Carter.</h1>

        <div className={styles.info}>
          <p>I do software.</p>
          <p>Currently based in Seattle, WA.</p>
          <p>I've written, tested, and deployed code for Nike and Amazon.</p>
          <p>Always looking for new exciting opportunities.</p>
        </div>

        <div className={styles.scrollBtns}>
          <button
            className={styles.scrollBtn}
            onClick={() => scrollToDiv(projectRef)}
          >
            My Projects
          </button>
        </div>
      </main>
      <div>
        <Projects reference={projectRef} />
      </div>
    </div>
  );
}
