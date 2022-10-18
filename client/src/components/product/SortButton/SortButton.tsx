import React from 'react';
import './SortButton.css';

export interface SortButtonProps {
  value: string;

  sortBy: {
    text: string;
    value: string;
  }[];

  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

export function SortButton({ value, sortBy, onChange }: SortButtonProps) {
  return (
    <div className="SortButton">
      <select onChange={onChange}>
        {sortBy.map((option) => (
          <option key={option.value} value={option.value} selected={value === option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
