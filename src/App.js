import "./styles/App.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import TCV from "./components/TCV";
import Teams from "./components/Teams";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Companies />
      <TCV />
      <Teams />
      <div className="space" style={{ height: "200vh" }}></div>
    </div>
  );
}

export default App;
