import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home2 from "./components/Pages/Home2";
import Products from "./components/Pages/Products";
import Help2 from "./components/Pages/Help2";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="max-w-[1640px] mx-auto
                 bg-[url('https://i.pinimg.com/1200x/4e/c8/cb/4ec8cb076d85518f0495dca647152a11.jpg')] 
                 bg-cover bg-center bg-no-repeat min-h-screen"
    >
      <div className="bg-black/60 min-h-screen">

        {/* HEADER */}
        <header className="relative flex bg-black/70 backdrop-blur-lg items-center justify-between p-4">

          {/* LOGO */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-blue-900 font-bold">
            SHE<span className="text-white">RIF</span>
          </h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center mr-8">
            <Link to="/" className="nav-link pr-5 font-bold text-white text-xl hover:text-blue-400 focus:text-blue-800 focus:text-3xl hover:text-2xl duration-300">Home</Link>
            <Link to="/Products" className="nav-link pr-5 font-bold text-white text-xl hover:text-blue-400 focus:text-blue-800 focus:text-3xl hover:text-2xl duration-300">Products</Link>
            <Link to="/Help" className="nav-link pr-5 font-bold text-white text-xl hover:text-blue-400 focus:text-blue-800 focus:text-3xl hover:text-2xl duration-300">Help</Link>
          </nav>

          {/* HAMBURGER BUTTON (MOBILE) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl focus:outline-none border-0"
          >
            <GiHamburgerMenu />
          </button>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-black/90 flex flex-col items-center py-6 md:hidden z-50">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="mobile-link font-bold text-white text-xl hover:text-blue-400 focus:text-blue-800 focus:text-3xl hover:text-2xl duration-300"
              >
                Home
              </Link>
              <Link
                to="/Products"
                onClick={() => setMenuOpen(false)}
                className="mobile-link font-bold text-white text-xl hover:text-blue-400 focus:text-blue-800 focus:text-3xl hover:text-2xl duration-300"
              >
                Products
              </Link>
              <Link
                to="/Help"
                onClick={() => setMenuOpen(false)}
                className="mobile-link font-bold text-white text-xl hover:text-blue-400 focus:text-blue-800 focus:text-3xl hover:text-2xl duration-300"
              >
                Help
              </Link>
            </div>
          )}
        </header>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Help" element={<Help2 />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
