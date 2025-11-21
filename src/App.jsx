import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Products from './components/Products';
import Category from './components/Category';
import Connect from './components/Connect';
import Help from "./components/help/Help";



function App() {

  return (
    <div className='max-w-[1640px] min-w-[10px] mx-auto bg-black/10'>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Products />
      <Category />
      <Connect />

      <Routes>
        <Route path="/Help" element={<Help />} />
      </Routes>

    </div>
  )
}

export default App;
