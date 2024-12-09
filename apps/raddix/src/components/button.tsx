import type { TextStr } from '@/types/global';
import Link from 'next/link';

export interface ButtonProps extends TextStr {
  link: string;
  target?: React.HTMLAttributeAnchorTarget;
  color?: 'primary' | 'secondary';
}

export const Button = ({
  text,
  color = 'secondary',
  link = '/',
  target
}: ButtonProps) => {
  const colorStyles = {
    primary: 'bg-purple-60 border-0 hover:bg-purple-70 text-[#fff]',
    secondary:
      'bg-transparent border border-gray-100 border-solid hover:bg-gray-10 dark:hover:bg-gray-120'
  };

  return (
    <Link
      type='button'
      href={link}
      target={target}
      className={`cursor-pointer rounded-3xl px-7 py-2.5 text-sm transition-colors duration-100 ${colorStyles[color]}`}
    >
      {text}
    </Link>
  );
};
