import { useEffect, useState } from "react";
import Head from "next/head";
import Welcome from "@/sections/Welcome";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Resume from "@/sections/Resume";

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
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        // Primary Meta Tags
        <title>@acmahaja</title>
        <meta name="title" content="@acmahaja"></meta>
        <meta
          name="description"
          content="I'm a software engineering student at the University of Melbourne experienced in React, Node.js, and Google Cloud. With strong UI/UX skills and business process understanding, I'm seeking graduate and career opportunities in the Australian software engineering industry. "
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/android-chrome-192x192.png"></meta>
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
        <link rel="manifest" href="/site.webmanifest" />
        // Open Graph / Facebook
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.acmahaja.com/"></meta>
        <meta property="og:title" content="@acmahaja"></meta>
        <meta
          property="og:description"
          content="I am a software engineering with business student at the University of Melbourne, I completed my undergraduate degree in Computer Engineering at North Carolina State University."
        ></meta>
        <meta
          property="og:image"
          content="https://www.acmahaja.com/android-chrome-512x512.png"
        ></meta>
        // Twitter
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://www.acmahaja.com/"></meta>
        <meta property="twitter:title" content="@acmahaja"></meta>
        <meta
          property="twitter:description"
          content="I am a software engineering with business student at the University of Melbourne, I completed my undergraduate degree in Computer Engineering at North Carolina State University."
        ></meta>
        <meta
          property="twitter:image"
          content="https://www.acmahaja.com/android-chrome-512x512.png"
        ></meta>
      </Head>
      <Welcome />
      <About />
      <Projects />
      <Resume />
    </>
  );
}
