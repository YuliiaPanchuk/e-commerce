import { useEffect, useRef, useState } from 'react';
import './AddToCart.css';

export interface AddToCartProps {
  count?: number;

  onChange: (value: number) => void;
  onClick: () => void;

  UNSAFE_style?: React.CSSProperties;
}

export function AddToCart({ count = 0, onChange, onClick, UNSAFE_style }: AddToCartProps) {
  const [value, setValue] = useState(String(count));
  const lastValidValue = useRef(count);

  // update to match the prop when changed
  useEffect(() => {
    if (count) {
      setValue(String(count));
      lastValidValue.current = count;
    }
  }, [count]);

  let classNames = ['AddToCart'];
  if (count !== 0) {
    classNames.push('AddToCart--has-many');
  }

  return (
    <div className={classNames.join(' ')} style={UNSAFE_style}>
      {count === 0 ? (
        <button
          className="AddToCart__Single"
          onClick={() => {
            onChange && onChange(count + 1);
            onClick && onClick();
          }}
        >
          +Add to cart
        </button>
      ) : (
        <div className="AddToCart__Many">
          <button
            onClick={() => {
              onChange && onChange(Math.max(count - 1, 0));
            }}
          >
            -
          </button>
          <input
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            onBlur={() => {
              const num = Number(value);
              if (typeof num === 'number') {
                const newValue = num > 0 ? num : 0;
                if (lastValidValue.current !== num) {
                  lastValidValue.current = num;
                  onChange && onChange(newValue);
                }
              } else {
                setValue(String(lastValidValue.current));
              }
            }}
          />
          <button
            onClick={() => {
              onChange && onChange(count + 1);
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
