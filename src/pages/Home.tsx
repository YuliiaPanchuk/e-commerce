import { ContactForm } from "../components/Contact/ContactForm";
import { HomeComponent } from "../components/HomeComponent/HomeComponent";
import { NavBar } from "../components/NavBar/NavBar";
import { UppBtn } from "../components/ScrollButton/UppBtn";

export function Home() {
  return (
    <>
      <NavBar />
      <UppBtn />
      <HomeComponent />
    </>
  )
}