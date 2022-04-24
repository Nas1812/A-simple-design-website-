import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Contact, Error, About, Blogs } from "./containers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
