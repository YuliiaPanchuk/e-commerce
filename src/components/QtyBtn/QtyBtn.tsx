import './QtyBtn.css';

interface QtyBtnProps {
  quantity: number,
  incr: () => void,
  decr: () => void
}

export function QtyBtn({quantity, incr, decr }: QtyBtnProps) {
  return (
    <div>
      <button onClick={decr}>-</button>
      <div>
        <span>{quantity}</span>
      </div>
      <button onClick={incr}>+</button>
    </div>
  );
}
