import type { TextStr } from '@/types/global';
import { Copy } from './copy';

const getTokenProps = (str: string) => {
  if (
    str === 'install' ||
    str === 'i' ||
    str === 'add' ||
    str === 'dlx' ||
    str === 'init' ||
    str === 'npx' ||
    str === 'run'
  ) {
    return { className: 'text-[#0d8a99] dark:text-[#56b6c2]' };
  }

  return { className: 'dark:text-[#D3D7CF]' };
};

const getValues = (str: string) => {
  const tokens = str.split(' ');
  const command = tokens.shift();

  return { command, tokens };
};

export const Snippet = ({ text }: TextStr) => {
  const { command, tokens } = getValues(text);

  return (
    <div className='relative my-sm rounded-xl border border-black/5 bg-gray-10/35 p-sm md:px-6 md:py-[21px] dark:border-gray-100 dark:bg-gray-120/80'>
      <pre className='text-xs md:text-[15px]'>
        <div className='w-full'>
          <span className='text-[#0d8a99] dark:text-[#56b6c2]'>{command}</span>
          {tokens.map((value, i) => (
            <span key={i} {...getTokenProps(value)}>
              &nbsp;{value}
            </span>
          ))}
        </div>
      </pre>
      <Copy text={text} />
    </div>
  );
};