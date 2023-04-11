import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/Navbar';
import Header from './sections/header/Header';
import About from './about/About';
import Contact from "./contact/Contact"
import Footer from './footer/Footer';
import Services from './services_js/Services'
import Skills from './skills/Skills';
import Portfolio from './portfolio/Portfolio';
import Faqs from './faqs/Faqs';
function App() {
  return (
    <div className="App">
    <NavBar />
     <Header />
     <Services />
     <Skills />
     <About />
     <Portfolio />
     <Faqs/>
     <Contact />
     <Footer />

    </div>
  );
}

export default App;
