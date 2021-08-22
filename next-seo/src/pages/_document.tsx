import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const url = `http://localhost:3000/`;
const description = `HaHa | HeHe`
const name = "HaHa"
const social_image = "mstile-150x150.png"

export default class extends Document {
  static async getInitialProps(ctx: any) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>

          <meta
            name="keywords"
            content="Hello, hola, blah blah"
          />
          <meta name="author" content="Ja Nakh Pon" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="description" content={description} />
          <meta name="theme-color" content="#006ABC" />

          {/* openGraph */}
          <meta property="og:title" content={name} />
          <meta
            property="og:description"
            content={description}
          />
          <meta property="og:type" content={"website"} />
          <meta property="og:url" content={url} />
          <meta property="og:locale" content="en_IE" />
          <meta property="og:site_name" content={name} />
          <meta property="og:image" content={social_image} />

          {/* Twitter */}
          <meta name="twitter:site" content={`@ja_nakh`} />
          <meta name="twitter:creator" content={`@ja_nakh`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={name} />
          <meta
            name="twitter:description"
            content={description}
          />
          <meta name="twitter:image" content={social_image} />

          {/* Icons */}
          <link rel="canonical" href={url} />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#006ABC" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
