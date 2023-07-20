import Link from 'next/link';
import React, { CSSProperties, ReactNode } from 'react';

import stylesModule from './styles.module.scss';

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  styles?: CSSProperties;
  onClick?: () => void;
  target?: "_blank" | "_parent" | "_self" | "_top";
  colorType: "blue" | "green" | "red" | "red-dark" | "black";
}

export const Button = ({
  children,
  icon,
  colorType,
  href,
  target,
  onClick,
  styles,
}: ButtonProps) => {
  return (
    <>
      {href == undefined ? (
        <button
          className={`${stylesModule.container} ${stylesModule[colorType]}`}
          style={styles}
          onClick={onClick}
        >
          {children}
          {icon && <div className={stylesModule.button_container}>{icon}</div>}
        </button>
      ) : (
        <Link
          href={href}
          target={target}
          className={`${stylesModule.container} ${stylesModule[colorType]}`}
          style={styles}
        >
          {children}
          {icon && <div className={stylesModule.button_container}>{icon}</div>}
        </Link>
      )}
    </>
  );
};
