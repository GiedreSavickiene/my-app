import { useEffect } from 'react';
import { useReducer } from 'react';
import '../../front.scss';
import productsReducer from '../../Reducer/productReducer';
import Loader from './Loader';
import Products from './Products';
import TopBar from './TopBar';
import axios from 'axios'
import {getProductsFromServer} from '../../Actions/produtcts';
import FrontContext from '../../Contexts/FrontContext';
import Bar from './Bar'



function Front() {

const [products, dp] = useReducer(productsReducer, null)

useEffect(() =>{
  axios.get('http://localhost:3003/products')
  .then(res => dp(getProductsFromServer(res.data)) 
  

  )})


  return (
    <FrontContext.Provider value={{products, dp}}>
    <div id='shop'>
      <div className="bin">
        <TopBar></TopBar>
        <Bar></Bar>
        {
          products !== null ? <Products></Products> : <Loader></Loader>
        }
        
        
    </div>
    </div>

    </FrontContext.Provider>
  );
}

export default Front;