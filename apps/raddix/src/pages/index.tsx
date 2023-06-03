import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { HomeData } from '@/types/home-data';
import { Hero } from '@/components/hero';
import { HomeLayout } from '@/layouts/home';
import { getMdxData } from '@/lib/mdx';
// import { Styling } from '@/components/styling';
// import { Accessible } from '@/components/home/accessible';

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <HomeLayout>
      <Hero {...data.hero} />
      {/* <Accessible {...data.accessible} /> */}
      {/* <Styling {...data.styling} /> */}
    </HomeLayout>
  );
};

export const getStaticProps: GetStaticProps<{
  data: HomeData;
}> = ({ locale }) => {
  const homeData = getMdxData<HomeData>({ locale, file: 'home' });

  return {
    props: {
      data: homeData
    }
  };
};

export default Home;
