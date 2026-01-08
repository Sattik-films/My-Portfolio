import './App.css'
import About from './components/About/About';
// import { ThreeDCardDemo } from './components/Card';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import MyWork from './components/MyWork/MyWork';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Top from './components/Top';
import Whatsapp from './components/Whatsapp';
import './index.css'

function App() {
  return (
    <>
      <Top />
      <Whatsapp />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      {/* <ThreeDCardDemo /> */}
      <Footer />
    </>
  );
}

export default App
