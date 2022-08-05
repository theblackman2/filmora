import React from "react";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import Show from "./components/Show/Show";
import "./App.css";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/movies/:name" element={<Movies />} />
        <Route path="/movies/:name/:id" element={<Show />} />
        <Route path="*" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
