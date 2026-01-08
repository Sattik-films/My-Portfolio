import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Top from "./components/Top";
import Whatsapp from "./components/Whatsapp";
import background from "./assets/Background/background.gif";

function App() {
  return (
    <>
      <div
        className="fixed opacity-10 z-[-10] w-screen h-screen top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      />

      <div className="content">
        <Top />
        <Whatsapp />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
