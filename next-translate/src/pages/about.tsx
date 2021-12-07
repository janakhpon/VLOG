import type { NextPage } from "next";
import Page from "@layouts/page";
import useTranslation from "next-translate/useTranslation";

const About: NextPage = () => {
  const { t } = useTranslation("about");

  return (
    <Page
      meta={{
        title: "Dynamic",
        description: `Website's About page`,
      }}
    >
      <div >
        <main>
          <h1>{t("title")}</h1>
        </main>
      </div>
    </Page>
  );
};

export default About;
