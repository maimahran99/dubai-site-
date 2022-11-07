import { BrowserRouter , Routes ,Route } from "react-router-dom"
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from "./pages/home/home";
import SingleTour from "./pages/tour/SingleTour";
import About from "./pages/about/about";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
             <Route path="/tour/:id" element={<SingleTour />} />
             <Route path="/about" element={<About />} />
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
          </BrowserRouter>
  );
}

export default App;
