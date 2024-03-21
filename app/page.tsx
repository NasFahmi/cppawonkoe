import About from "./components/About"
import Contact from "./components/Contact";
import Header from "./components/Header"
import Journey from "./components/Journey";
import VisiMisi from './components/VisiMisi'
import Footer from './components/Footer'
import JangkauanPasar from "./components/JangkauanPasar";
import KeunggulanProduct from "./components/KeunggulanProduct";
 export default function Home() {
  return (
    <main className="mx-auto scroll-smooth ">
      <Header />
      <About />
      <Journey />
      <VisiMisi />
      <JangkauanPasar />
      <KeunggulanProduct />
      <Contact />
      <Footer />
    </main>
  );
}
