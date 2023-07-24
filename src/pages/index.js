import Head from "next/head";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { backgroundColor } from "../../styles/colors.module.scss";
import Knowledge from "./components/Knowledge";
import JobExperience from "./components/JobExperience";
import Projects from "./components/Projects";

export default function Home() {
  // const changeMode = () => {
  //   const body = document.querySelector("body");
  //   body.classList.toggle("dark");
  //   localStorage.getItem("color-theme") === "light"
  //     ? localStorage.setItem("color-theme", "light")
  //     : localStorage.setItem("color-theme", "dark");
  // };

  return (
    <>
      <Head>
        <title>FugenX</title>
        <meta name="author" content="Fugnex" />
        <link rel="icon" href="/fugenx_logo.png" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar />
      <main className="overflow-hidden pb-10 w-full relative">
        <div className="md:mt-48 mt-24 mx-auto xl:max-w-6xl lg:max-w-5xl md:max-w-3xl md:px-4 px-6 w-full sm:px-6 lg:px-8 relative">
          <Header />
          <About />
          <Knowledge />
          <Projects />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
