import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./views/Homepage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
