import './Sidebar.css';

export interface SidebarProps {
  isOpen?: boolean;
  onClose: () => void;

  children: React.ReactNode | React.ReactNode[];
}

export function Sidebar({ isOpen, onClose, children }: SidebarProps) {
  const classNames = ['Sidebar'];
  if (!isOpen) {
    classNames.push('Sidebar--is-hidden');
  }

  return (
    <div className={classNames.join(' ')}>
      {isOpen && (
        <>
          <div className="Sidebar__Overlay" onClick={() => onClose()}></div>
          <div className="Sidebar__Content">{children}</div>
        </>
      )}
    </div>
  );
}
