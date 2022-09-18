import './AddBtn.css';

interface AddBtnProps {
  addProd: () => void,
  incrQty: () => void
}

export function AddBtn({addProd, incrQty}: AddBtnProps) {
  return (
    <>
      <button
        className="addToCartBtn"
        onClick={() => {
          addProd();
          incrQty();
        }}
      >
        +Add to cart
      </button>
    </>
  );
}
