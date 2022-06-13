import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import NavBAr from './NavBar';
import { useState } from 'react';
import ProductsList from './ProductsList';
import { useEffect } from 'react';
import axios from 'axios'
import ProductCreate from './ProductCreate';
import Message from './Message';

function Back() {

    const [products, setProducts] = useState(null);
    const [lastProductUpdate, setLastProductUpdate] = useState(Date.now());
    const [message, setMessage] = useState({show: false});

    const [createProductData, setCreateProductData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/admin/products')
        .then(res =>setProducts(res.data))
    }, [lastProductUpdate]);

    useEffect(() => {
        if(createProductData === null) return;
        axios.post('http://localhost:3003/admin/products', createProductData)
        .then(res =>setLastProductUpdate(Date.now()))
        showMessage('success', 'Naujas produktas idetas')
        
    }, [createProductData]);

    const showMessage = (type, text) => {
      setMessage({
        type,
        text,
        show: true
      });
      setInterval(() => setMessage({show: false}), 1000000);
    }

  return (
    <BackContext.Provider value={{products, setCreateProductData, message}}>
        <div className="container">
            <div className="row">
                     <NavBAr></NavBAr>
                     <ProductCreate></ProductCreate>
                    <ProductsList></ProductsList>
                    
            </div>
        </div>
        <Message></Message>
    
    </BackContext.Provider>
  );
}

export default Back;