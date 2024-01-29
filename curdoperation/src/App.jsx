import React from "react";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Component/Add";
import Edit from "./Component/Edit";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
