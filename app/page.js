import About from "@/src/components/About";
import { Contact } from "@/src/components/Contact";
import { Experience } from "@/src/components/Experience";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/header/Header";
import { Hero } from "@/src/components/Hero";
import { Projects } from "@/src/components/Projects";
import Skills from "@/src/components/Skills";
import Cursor from "@/src/components/cursor/cursor";
import SmoothScroll from "@/src/components/smooth-scroll";
import { Suspense } from "react";
import { TimelineDemo } from "@/src/components/TimeLineExp";

export default function Home() {
  return (
    <SmoothScroll>
      <Suspense fallback={<p className="text-lg text-zinc-500">Loading...</p>}>
        <div className="dark flex bg-[#060708] min-h-[100dvh]  flex-col overflow-hidden">
          <Header />
          <main className="dark font-firaSans flex flex-col flex-1  text-white ">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <TimelineDemo />
            {/* <Contact /> */}
            <Footer />
          </main>
        </div>
      </Suspense>
      <Cursor />
    </SmoothScroll>
  );
}
