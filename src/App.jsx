import "./App.css";
import { Filter } from "./components/filters/Filter";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filter />
    </div>
  );
}

export default App;
