import './SearchBar.css';

export interface SearchBarProps {
  value: string;
  placeholder?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function SearchBar({ value, placeholder, onChange }: SearchBarProps) {
  return (
    <div className="SearchBar">
      <input value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
