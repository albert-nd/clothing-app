import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Products from './components/Products';
import Category from './components/Category';
import Connect from './components/Connect';



function App() {

  return (
    <div className='max-w-[1640px] min-w-[10px] mx-auto bg-black/10'>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Products />
      <Category />
      <Connect />
    </div>
  )
}

export default App;
