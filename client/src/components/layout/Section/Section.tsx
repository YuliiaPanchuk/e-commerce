import './Section.css';

export interface SectionProps {
  title?: string;

  children: React.ReactNode | React.ReactNode[];
}

export function Section({ title, children }: SectionProps) {
  return (
    <div className="Section">
      {Boolean(title) && <div className="Section__Title">{title}</div>}
      <div className="Section__Content">{children}</div>
    </div>
  );
}
