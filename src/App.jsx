import "./App.css";
import { Gyms } from "./components/Gyms";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Gyms />}></Route>
      </Routes>
    </div>
  );
}

export default App;
