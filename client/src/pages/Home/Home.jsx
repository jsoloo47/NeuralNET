import React from "react";

import { Footer, Features, Header } from "../../containers/index.js";

import { CTA, Navbar } from "../../components";

const Home = () => (
  <>
    <Navbar />
    <Header />
    <Features />
    <CTA />
    <Footer />
  </>
);

export default Home;
