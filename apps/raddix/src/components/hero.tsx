import type { HeroProps } from '@/types/home-data';
import Image from 'next/image';
import { Button } from './button';

export const Hero = ({ title, description, button }: HeroProps) => {
  return (
    <>
      <div className='relative mx-auto mb-28 mt-[min(15vw,_100px)] flex w-full flex-col items-center overflow-visible px-sm text-center md:flex-row-reverse'>
        <div className='relative mb-10 h-40 w-40 md:grid md:w-1/2 md:place-content-center'>
          <div className='absolute h-full w-full rounded-full bg-gradient-to-br from-blue-50 to-purple-50 blur-[100px] md:inset-0 md:m-auto md:h-96 md:w-96 md:opacity-75'></div>
          <div className='relative h-full w-full bg-gradient-to-t md:inset-1 md:h-72 md:w-72'>
            <Image
              src='/raddix.svg'
              alt='Raddix Logo'
              fill
              sizes='(max-width: 900px) 160px, 300px'
            />
          </div>
        </div>
        <div className='md:w-1/2 md:text-start'>
          <h1 className='mx-auto mb-16 max-w-5xl text-[clamp(3rem,_5vw,_5rem)] capitalize'>
            {title}
          </h1>
          <p className='mb-16 text-md opacity-80'>{description}</p>
          <div className='flex flex-wrap justify-center gap-5 md:justify-start'>
            <Button
              type='primary'
              text={button}
              to='/docs/get-started/create-component'
            />
            <Button
              type='secondary'
              text='GitHub'
              to='https://github.com/vintach/raddix'
            />
          </div>
        </div>
      </div>
    </>
  );
};