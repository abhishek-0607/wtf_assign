import "./App.css";
import { Gyms } from "./components/Gyms";

import { Route, Routes } from "react-router-dom";
import { Gympage } from "./components/gympage/Gympage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Gyms />}></Route>
        <Route exact path="/gymdetails" element={<Gympage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
