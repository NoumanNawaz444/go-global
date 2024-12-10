import About from "@/components/About";
import Carousel from "@/components/Carousel";
import CtA from "@/components/CtA";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Ielts from "@/components/Ielts";
import Blogs from "@/components/latestBlogs";
import LogoCloud from "@/components/LogoCloud";
import Services from "@/components/Services";
import MainFooter from "@/components/MainFooter"
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Carousel />
      <Services />
      <LogoCloud />
      <Ielts />
      <HowWeWork />
      <Feedback />
      <CtA />
      <Blogs />
    </main>
  );
}
