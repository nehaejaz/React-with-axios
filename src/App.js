import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserDisplay from './components/auth/DisplayUsers'
import DisplayOrders from './components/orders/DisplayOrder';
import DisplayProduct from './components/products/DisplayProduct';
import DisplayUsers from './components/auth/DisplayUsers';
import ProductForm from './components/products/ProductsForm'

function App() {
  return (
    <div className="App">
      <ProductForm />
      <DisplayProduct />
      <DisplayUsers />
      <DisplayOrders />
    </div>
  );
}

export default App;
