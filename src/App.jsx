import "./App.css";
import { Filter } from "./components/filters/Filter";
import { Navbar } from "./components/navbar/Navbar";
import { Searchbar } from "./components/searchbar/Searchbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Filter />
    </div>
  );
}

export default App;
