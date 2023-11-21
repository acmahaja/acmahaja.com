import { useEffect, useState } from "react";
import Head from "next/head";
import Welcome from "@/sections/Welcome";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Resume from "@/sections/Resume";
import {Analytics} from "@vercel/analytics/react";

export default function Home() {
  useEffect(() => {
    const currentTime = new Date().toISOString();
    fetch(process.env.NEXT_PUBLIC_DISCORD_SERVER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `User visited the homepage at ${currentTime}`,
      }),
    });
    console.log("%cCongratulations! 🎉", "color: white; font-size: 20px;");
    console.log(
      "%cYou've found a secret message!",
      "color: white; font-size: 16px;"
    );
    console.log(
      "%cIf you're curious about how this website was built or want to see more of my work, check out my GitHub:",
      "color: white; font-size: 14px;"
    );
    console.log(
      "%chttps://github.com/acmahaja",
      "color: orange; font-size: 14px; text-decoration: underline;"
    );
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content="acmahaja.com" />
        <meta
          name="description"
          content="I'm a software engineering student at the University of Melbourne, passionate about crafting human-centric applications. Proficient in React, Node.js, and Google Cloud with a strong UI/UX background, I'm keen to pursue opportunities in the Australian software industry."
        />
        <meta
          name="keywords"
          content="Anjaney C Mahajan, Software Engineer, Full-stack applications, Melbourne, Australia, Computer Engineering, The University of Melbourne, Portfolio website, Next.js, Typescript, MongoDB, Google Cloud, Technical skills, Embedded System Programming, AutoCAD"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Anjaney C Mahajan" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:image"
          content="https://www.acmahaja.com/banner.png"
        />
        // TODO: RE-ADD FACEBOOK AND TWITTER META TAGS 

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.acmahaja.com/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.acmahaja.com/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://www.acmahaja.com/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Analytics />
      <Welcome />
      <About />
      <Projects />
      <Resume />
    </>
  );
}
