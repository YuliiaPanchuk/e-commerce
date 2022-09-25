import './QtyBtn.css';

interface QtyBtnProps {
  quantity: number,
  incr: () => void,
  decr: () => void
}

export function QtyBtn({quantity, incr, decr }: QtyBtnProps) {
  return (
    <div className="quantityBlock">
      <button onClick={decr} className="decrButton">-</button>
      <div className="quatityButton">
        <span>{quantity}</span>
      </div>
      <button onClick={incr} className="incrButton">+</button>
    </div>
  );
}
