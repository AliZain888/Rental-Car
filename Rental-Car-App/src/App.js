import './App.css';
import Banners from './Pages/Banners';
import PoplarCar from './Pages/PoplarCar';
import RecommendedCar from './Pages/RecommendedCar';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PicknDrop from './components/PicknDrop';

function App() {
  return (
    <>
    <Navbar/>
    <Banners/>
    <PicknDrop/>
    <PoplarCar/>
    <RecommendedCar/>
    <Footer/>
    </>
  );
}

export default App;
