import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MiniProjects from "../MiniProjects";
import MLProjects from "../MLPojects";

import MyPortfolio from "../MyPortfolio";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutMe />
      <MyPortfolio />
      <MLProjects/>
      <MiniProjects/>

      <ContactMe />
      <Footer />
  
    </>
  );
}
