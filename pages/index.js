import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SliderCarasouel from './components/SliderCarasouel';
import OurProducts from './components/OurProducts';
import OurStory from './components/OurStory';
import Specification from './components/Specification';
import FooterComponents from './components/FooterComponents';
import Enquirenow from './components/Enquirenow';
import FFaq from './components/FFaq';
import Support from './components/Support';
import Hichargevsothers from './components/Hichargevsothers';
import Benifits from './components/Benifits';
import OurProductss from './components/OurProductss';
import Applications from './components/Applications';
import AppHeader from './components/AppHeader';
import Picture from './components/Picture';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hicharge - Get Fuelled</title>
        <meta name="description" content="Hicharge: very fast" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <SliderCarasouel />
        <Picture />
        <Specification />
        <OurProducts />

        <Support />
        {/* <Hichargevsothers /> */}
        {/* <Support /> */}
        <FFaq />
        {/* <Enquirenow /> */}
        <FooterComponents />
        {/* <AppHeader /> */}

        {/* <SliderCarasouel />
        <Picture />
        <OurProducts /> */}
        {/* <Benifits /> */}
        {/* <Benifits /> */}
        {/* <OurProducts />
        <Benifits />
        // <OurStory />
        <Specification />
        <Hichargevsothers />
        <Support />
        <FFaq /> */}
        {/* <OurProductss /> */}
        {/* <Applications />
        <OurProductss />
        <Benifits />
        <OurStory />
        <Specification />
        <Hichargevsothers />
        <Support />
        <FFaq />
        <Enquirenow />
        <FooterComponents /> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
