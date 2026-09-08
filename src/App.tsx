import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import World from "./components/World";
import Logotype from "./components/Logotype";
import Graphics from "./components/Graphics";
import Apparel from "./components/Apparel";
import Photography from "./components/Photography";
import Campaign from "./components/Campaign";
import Packaging from "./components/Packaging";
import Archive from "./components/Archive";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <Cursor />
      <div className="noise-overlay pointer-events-none fixed inset-0 z-[100]" aria-hidden />
      <Header />
      <main>
        <Hero />
        <World />
        <Logotype />
        <Graphics />
        <Apparel />
        <Photography />
        <Campaign />
        <Packaging />
        <Archive />
      </main>
      <Footer />
    </div>
  );
}
