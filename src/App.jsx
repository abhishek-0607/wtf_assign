import "./App.css";
import { Filter } from "./components/filters/Filter";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/Navbar";
import { Searchbar } from "./components/searchbar/Searchbar";
import { Upper } from "./components/upper/upper";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Filter />
      <Upper />
      <Footer />
    </div>
  );
}

export default App;
