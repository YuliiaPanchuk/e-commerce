import './Container.css';

export enum ContainerVariant {
  Default = 'default',
  Products = 'products',
  ProductFilter = 'product-filter',
}

export interface ContainerProps {
  variant?: ContainerVariant;

  children: React.ReactNode;

  UNSAFE_style?: React.CSSProperties;
}

export function Container({
  variant = ContainerVariant.Default,
  children,
  UNSAFE_style,
}: ContainerProps) {
  return (
    <div className={['container', `container__variant-${variant}`].join(' ')} style={UNSAFE_style}>
      <div className="container__inner">{children}</div>
    </div>
  );
}
