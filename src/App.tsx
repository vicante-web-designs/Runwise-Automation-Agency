import './App.css';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Services from './sections/Services';
import SpecializedServices from './sections/SpecializedServices';
import Process from './sections/Process';
import Tools from './sections/Tools';
import WhyUs from './sections/WhyUs';
import CTA from './sections/CTA';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {

  return (
  <main className='flex flex-col gap-20 md:gap-40 mx-6 md:mx-[60px] lg:mx-[120px]'>
     <Nav />
     <Hero />
     <Services />
     <SpecializedServices />
     <Process />
     <Tools />
     <WhyUs />
     <CTA />
     <FAQ />
     <Contact />
     <Footer />
  </main>
  )
}

export default App
