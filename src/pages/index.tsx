import type { NextPage } from "next";
import Head from "next/head";
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Navbar  from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Partners from "../components/Partners";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paperless</title>
      </Head>
      <body>
          <Navbar />
          <br></br>
          <br></br>
          <Hero />
          <br></br>
          <br></br>
          <Partners />
          <br></br>
          <br></br>
          <Features />
          <br></br>
          <br></br>
          
          <Footer />   
      </body>
      
    </>
  );
};

export default Home;
