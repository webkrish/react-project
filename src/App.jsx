import "./css/style.css"
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Help } from "./Help";
import { Focus } from "./Focus";
import { Sales } from "./Sales";
import { Knowledge } from "./Knowledge";
import { Map } from "./Map";
import { Footer } from "./Footer";
function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Help />
      <Focus/>
      <Sales/>
      <Knowledge/>
      <Map/>
      <Footer/>
    </>
  )
}

export default App
