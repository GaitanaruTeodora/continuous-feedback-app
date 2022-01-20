import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import AuthForm from './components/AuthForm';
import Home from "./components/Home";
import NotFound from "./components/NotFound";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
