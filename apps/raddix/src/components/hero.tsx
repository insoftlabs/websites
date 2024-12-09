import type { HeroProps } from '@/types/home-data';
import { Button } from './button';

export const Hero = ({ title, description, actions }: HeroProps) => {
  return (
    <section className='relative mb-16 mt-44'>
      <h1 className='font-tight mx-auto mb-6 max-w-[25ch] text-balance text-center text-[3rem] font-extrabold leading-[3.5rem] text-white md:text-[4rem] md:leading-[4.8rem]'>
        {title}
      </h1>
      <p className='mx-auto mb-xl max-w-[768px] text-center text-md text-[#888]'>
        {description}
      </p>
      <div className='flex justify-center gap-2'>
        {actions.map(action => (
          <Button
            key={action.text}
            color={action.color}
            text={action.text}
            link={action.link}
          />
        ))}
      </div>
    </section>
  );
};
