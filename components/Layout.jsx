import Head from "next/head";
import React from "react";
import { Header, Footer } from "./index";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title>Personal Portfolio Websites</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon/favicon.ico"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}
