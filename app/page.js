import Image from 'next/image';
import nextLogo from '../public/next.svg';
import Banner from '../components/banner';
import Deals from '@/components/deals';

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
      </div>
      <div>
        <Deals />
      </div>
    </main>
  );
}
