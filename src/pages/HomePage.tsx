import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { FreeMVPBanner } from '../components/FreeMVPBanner';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HowWeWork } from '../components/HowWeWork';
import { Testimonials } from '../components/Testimonials';
import { Portfolio } from '../components/Portfolio';
import { ContactForm } from '../components/ContactForm';
import { PageType } from '../App';

interface HomePageProps {
  navigateToPage: (page: PageType) => void;
}

export function HomePage({ navigateToPage }: HomePageProps) {
  return (
    <>
      <Hero navigateToPage={navigateToPage} />
      <Services navigateToPage={navigateToPage} />
      <FreeMVPBanner navigateToPage={navigateToPage} />
      <WhyChooseUs />
      <HowWeWork />
      <Testimonials />
      <Portfolio navigateToPage={navigateToPage} />
      <ContactForm />
    </>
  );
}