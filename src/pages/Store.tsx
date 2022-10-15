import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar/NavBar";
import { ProductCart } from "../components/ProductCart/ProductCart";
import { UppBtn } from "../components/ScrollButton/UppBtn";
import { SortButton } from "../components/SortButton/SortButton";

export function Store() {
  return (
    <>
      <NavBar />
      <SortButton />
      <ProductCart />
      <UppBtn />
      <Footer/>
    </>
  )
}