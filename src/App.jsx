import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GridView from "../src/GridView";
import Todo from "./Todo";
import Navbar from "./Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/gridview" element={<GridView />} />
        <Route path="/profile" element={<GridView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
