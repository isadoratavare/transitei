import Home from "../../pages/Home";
import Login from "../../pages/login";
import "./style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>  
    </BrowserRouter>
  );
}
