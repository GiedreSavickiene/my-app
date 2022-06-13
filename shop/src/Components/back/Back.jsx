import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import NavBAr from './NavBar';
import { useState } from 'react';
import ProductsList from './ProductsList';
import { useEffect } from 'react';
import axios from 'axios'
import ProductCreate from './ProductCreate';

function Back() {

    const [products, setProducts] = useState(null);

    const [createProductData, setCreateProductData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/admin/products')
        .then(res =>setProducts(res.data))
    }, []);

    useEffect(() => {
        
        axios.post('http://localhost:3003/admin/products', createProductData)
        .then(res =>console.log(res.data))
    }, [createProductData]);

  return (
    <BackContext.Provider value={{products, setCreateProductData}}>
        <div className="container">
            <div className="row">
                     <NavBAr></NavBAr>
                     <ProductCreate></ProductCreate>
                    <ProductsList></ProductsList>
                    
            </div>
        </div>
    
    </BackContext.Provider>
  );
}

export default Back;