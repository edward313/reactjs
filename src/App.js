import logo from './logo.svg';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import Header from './component/Header';
import LoginScreen from './screens/LoginScreen';
import NotFound from './screens/NotFoundScreen';
import HomeScreen from './screens/HomeScreen';

import $ from 'jquery'
import CartScreen from './screens/CartScreen';
function App() {
  return (
    <div className="App">
      {/* <HeaderOne></HeaderOne>
      <Footer></Footer> */}
      <Header></Header>
      <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/product" element={<ProductScreen/>}/>
      <Route path ="/register" element={<RegisterScreen/>}/>
      <Route path ="/product/:id" element={<ProductDetailScreen/>}/>

      <Route path ="/cart" element={<CartScreen/>}/>
      <Route path='/cart/:id' element={<CartScreen />} />
      <Route path ="*" element={<NotFound/>}/>
      <Route path="/login" element={<LoginScreen/>}/>
      </Routes>


      <Helmet>
      
		
        {/* <script src="js/bootstrap.min.js"></script>
		
        <script src="js/owl.carousel.min.js"></script>
		
        <script src="js/jquery.meanmenu.js"></script>
		
        <script src="js/jquery-ui.min.js"></script>
	
        <script src="js/wow.min.js"></script>
	
        <script src="js/plugins.js"></script>
		
        <script src="js/main.js"></script> */}
    
      </Helmet>
    </div>


  );
}

export default App;
