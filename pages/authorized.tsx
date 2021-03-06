import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Authorized.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>OZ</title>
        <meta name="oz" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div className={styles.o_logo}></div>
          <div className={styles.z_logo}>
            <div className={styles.z_logo_line}>
              <div></div>
            </div>
          </div>
        </div>
        <div className={styles.message}>
          <div className={styles.processing}>
            <div className={styles.loading}>
              <div className={styles.loading_bar}></div>
            </div>
            <div className={styles.authentication}>認証中</div>
          </div>
          <div className={styles.welcome}>Welcome!</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
