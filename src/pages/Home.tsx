import { ContactForm } from "../components/Contact/ContactForm";
import { Footer } from "../components/Footer/Footer";
import { HomeComponent } from "../components/HomeComponent/HomeComponent";
import { NavBar } from "../components/NavBar/NavBar";
import { News } from "../components/News/News";
import { UppBtn } from "../components/ScrollButton/UppBtn";
import { WhyUs } from "../components/WhyUs.tsx/WhyUs";

export function Home() {
  return (
    <>
      <NavBar />
      <UppBtn />
      <HomeComponent />
      <WhyUs />
      <News />
      <Footer />
    </>
  )
}