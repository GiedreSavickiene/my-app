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
    const [lastProductUpdate, setLastProductUpdate] = useState(Date.now());

    const [createProductData, setCreateProductData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/admin/products')
        .then(res =>setProducts(res.data))
    }, [lastProductUpdate]);

    useEffect(() => {
        if(createProductData === null) return;
        axios.post('http://localhost:3003/admin/products', createProductData)
        .then(res =>setLastProductUpdate(Date.now()))
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