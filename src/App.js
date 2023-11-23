import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Cards/>} />
        <Route  path="/card" element={<CardsDetails/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
