import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Offer from './components/Offer/Offer';
import Recommendation from './components/Recommendation/Recommendation';
import ProductList from './components/ProductList/ProductList'

function App() {
  return (
    <div>
      <Navigation/>
      <Header />
      <Offer/>
      <Recommendation/>
      <ProductList />
    </div>
  );
}

export default App;

/*
 ********* Folder Structure ********

  App.js
  ->Recommendation
  -->Header
  -->Navigation
  -->Offer
  -->Product List
      -->Diwali
      -->Groceries
      -->Electronics
*/