import React from 'react';
import './RemoveBtn.css';

interface RemoveBtnProps {
  onClick: () => void;
}

export function RemoveBtn({ onClick }: RemoveBtnProps) {
  return (
    <button onClick={onClick}>Remove</button>
  )
}
