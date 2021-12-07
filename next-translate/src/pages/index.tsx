import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Page from "@layouts/page";
import styles from "@styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment";
import "moment/locale/my";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [dval, setDval] = useState("");
  const withval = t("withValue", { date: dval });

  useEffect(() => {
    moment.locale(router.locale === "en" ? "en" : "my");
    setDval(moment().format("LL"));
  }, [router]);

  return (
    <Page
      meta={{
        title: "Dynamic",
        description: `Website's home page`,
      }}
    >
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>{t("title")}</h1>
          <h2>{withval} </h2>
          <p className={styles.description}>
            <button
              onClick={() => setLanguage(router.locale === "en" ? "mm" : "en")}
            >
              {t("change-locale")}
            </button>
          </p>
          <Link href="/about" passHref>
            Go to About Page!
          </Link>
          <div className={styles.grid}>
            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      </div>
    </Page>
  );
};

export default Home;
