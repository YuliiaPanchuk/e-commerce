import { NavBar } from "../components/NavBar/NavBar";
import { ProductCart } from "../components/ProductCart/ProductCart";
import { UppBtn } from "../components/ScrollButton/UppBtn";

export function Store() {
  return (
    <>
      <NavBar />
      <ProductCart />
      <UppBtn />
    </>
  )
}