import Link from 'next/link';
import React from 'react';

export type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
};

const LinkButton = ({ children, href, icon }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={`${
        icon && 'hover:pr-2 [&>svg]:hover:ml-3'
      }  inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium uppercase text-white duration-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 [&>svg]:ml-2 [&>svg]:duration-200`}
    >
      {children}
      {icon && icon}
    </Link>
  );
};

export default LinkButton;
