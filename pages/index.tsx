import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Index.module.css";

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
          <form action="authorized" className={styles.id_pass}>
            <input type="text" name="username" placeholder="ニックネーム" />
            <input type="password" name="password" placeholder="パスワード" />
            <button></button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
