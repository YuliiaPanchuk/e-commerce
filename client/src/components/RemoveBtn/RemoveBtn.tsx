import React from 'react';
import './RemoveBtn.css';
import { RemoveIcon } from './RemoveIcon';

interface RemoveBtnProps {
  onClick: () => void;
}

export function RemoveBtn({ onClick }: RemoveBtnProps) {
  return (
    <button onClick={onClick} className="removeBtn"><RemoveIcon /> Remove</button>
  )
}
