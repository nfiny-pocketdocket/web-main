import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./views/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
