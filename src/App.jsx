import { Routes, Route, Link } from "react-router-dom";
import Home2 from "./components/Pages/Home2";
import Products from "./components/Pages/Products";
import Help2 from "./components/Pages/Help2";

function App() {
  return (
    <div
      className="max-w-[1640px] mx-auto
                 bg-[url('https://i.pinimg.com/1200x/4e/c8/cb/4ec8cb076d85518f0495dca647152a11.jpg')] 
                 bg-cover bg-center bg-no-repeat min-h-screen"
    >
      <div className="bg-black/60 min-h-screen">

        <header className="flex bg-black/70 backdrop-blur-lg items-center justify-between p-4">

          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-blue-900 font-bold">
            SHE<span className="text-white">RIF</span>
          </h1>

          <nav className="flex items-center mr-8">
            <Link to="/" className="text-white mx-2 font-bold hover:text-blue-700 focus:shadow-2xl focus:text-blue-900 duration-300 text-xl">Home</Link>
            <Link to="/Products" className="text-white mx-2 font-bold hover:text-blue-700 focus:shadow-2xl focus:text-blue-900 duration-300 text-xl">Products</Link>
            <Link to="/Help" className="text-white mx-2 font-bold hover:text-blue-700 focus:shadow-2xl focus:text-blue-900 duration-300 text-xl">Help</Link>
          </nav>

        </header>

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
