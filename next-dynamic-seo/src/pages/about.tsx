import Page from "@layouts/page";

const About = () => (
  <Page
    meta={{
      title: "About",
      description: `Website's about page`,
      url: 'http://localhost:3000/about'
    }}>
    <h1>About</h1>
  </Page>
);
export default About;