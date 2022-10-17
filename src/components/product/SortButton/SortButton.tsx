import React from 'react';
import './SortButton.css';

export interface SortButtonProps {
  sortBy: {
    text: string;
    value: string;
  }[];

  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

export function SortButton({ sortBy, onChange }: SortButtonProps) {
  return (
    <div className="SortButton">
      <select onChange={onChange}>
        {sortBy.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
