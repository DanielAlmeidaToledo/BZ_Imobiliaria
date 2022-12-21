import './App.css'
import Carousel from './components/Carousel'
import Default from './components/Default'
import Forms from "./components/Forms";
import Projects from "./components/Projects";
import Value from './components/Value'

import whatsapp from '/animations/whats.png'

function App() {
  return (
    <div className="App">
      <a
        href="https://wa.me/5515981238616"
        target={"_blank"}
        className="whatsBtn"
      >
        <img src={whatsapp} alt="" className="whatsImg" />
      </a>
      <Carousel />
      <Default />
      <Value />
      <Projects />
      <Forms />
    </div>
  );
}

export default App
