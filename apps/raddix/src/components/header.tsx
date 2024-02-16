'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, type MenuItems } from './menu';
import { Language } from './language';
import { useIsMobile } from '@/hooks/useIsMobile';
import { MenuMobile } from './menu-mobile';
import { MediaLinks } from './media-links';

export const Header = ({ menu }: { menu: MenuItems[] }) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isMenuMobile, setIsMenuMobile] = useState<boolean>(false);

  const isMobile = useIsMobile('640px');

  const updateScroll = () => {
    if (window.scrollY < 10) {
      setScrollY(window.scrollY);
    }
  };

  const onScrollHeaderStyles =
    scrollY > 2 && !isMenuMobile
      ? 'bg-black/80 backdrop-saturate-100 backdrop-blur shadow-sm shadow-white/10'
      : '';

  const activeMenuStyles = isMenuMobile ? 'bg-black' : '';

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <header
      className={`sticky left-0 top-0 z-20 w-full transition-all duration-100 ${onScrollHeaderStyles} ${activeMenuStyles}`}
    >
      <div className='mx-auto flex h-20 w-full max-w-std items-center justify-between px-sm py-4'>
        <Link className='flex items-center gap-1.5' href='/'>
          <Image
            src='/raddix.svg'
            alt='Raddix logo'
            priority
            width={24}
            height={36}
          />
          <h1 className='text-[1.8rem] font-semibold'>raddix</h1>
        </Link>

        {!isMobile && (
          <>
            <Menu menu={menu} />
            <div className='flex items-center'>
              <Language />
              <MediaLinks />
            </div>
          </>
        )}

        {isMobile && (
          <MenuMobile
            menu={menu}
            isActive={isMenuMobile}
            setIsActive={setIsMenuMobile}
          />
        )}
      </div>
    </header>
  );
};
