
import './App.css';
import Prenavbar from './Components/Prenavbar';
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sliders from './Components/Sliders';
import data from "./data/data.json"
import Offers from './Components/Offers';
import Heading from './Components/Heading';
import Starproducts from './Components/Starproducts';
import HotaccessoriesMenu from "./Components/HotaccessoriesMenu";
import Hotaccessories from './Components/Hotaccessories';
import ProductReview from "./Components/ProductReview.js";
import Video from './Components/Video';
import Banner from './Components/Banner';
import Footer from "./Components/Footer.js"
import NavOption from './Components/NavOption';
function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <NavOption miphone={data.miPhones} redmiphone={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessLifestyle={data.fitnessAndLifeStyle} home={data.home} radio={data.audio} accessories={data.accessories} />
      <Sliders start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <Starproducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotaccessoriesMenu />

      <Routes>
        <Route exact path='/music'element={<Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>
      </Routes>
      <Routes>
        <Route exact path='/smart_device'element={<Hotaccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/>
      </Routes>
      <Routes>
        <Route exact path='/home'element={<Hotaccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}/>
      </Routes>
      <Routes>
        <Route exact path='/lifestyle'element={<Hotaccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}/>
      </Routes>
      <Routes>
        <Route exact path='/mobileaccessories'element={<Hotaccessories mobileAccessorites={data.hotAccessories.mobileAccessories} mobileAccessoritesCover={data.hotAccessoriesCover.mobileAccessories}/>}/>
      </Routes>

      <Heading text="PRODUCT REVIEWS"/>
      <ProductReview ProductReview={data.productReviews}/>

      <Heading text="VIDEOS"/>
      <Video video={data.videos} />

      <Heading text="something"/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
