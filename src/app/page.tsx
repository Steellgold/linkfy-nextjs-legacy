/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import Header from "./header";
import Features from "./features";
import Try from "./try";

const Home = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Try />
      <Features />
    </>
  );
};

export default Home;
