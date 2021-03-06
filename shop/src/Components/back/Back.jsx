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
import ProductEdit from './ProductEdit';

function Back() {

    const [products, setProducts] = useState(null);
    const [lastProductUpdate, setLastProductUpdate] = useState(Date.now());
    const [message, setMessage] = useState({show: false});

     const [modalProductData, setModalProductData] = useState(null);

    const [createProductData, setCreateProductData] = useState(null);
    const [deleteProductData, setDeleteProductData] = useState(null);
    const [editProductData, setEditProductData] = useState(null);


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

     useEffect(() => {
        if (deleteProductData === null) return;
        axios.delete('http://localhost:3003/admin/products/' + deleteProductData.id)
            .then(_ => {
                setLastProductUpdate(Date.now());
                showMessage('success', 'Produktas sėkmingai ištrintas');
            });
    }, [deleteProductData]);

     useEffect(() => {
        if (editProductData === null) return;
        axios.put('http://localhost:3003/admin/products/' + editProductData.id, editProductData)
            .then(_ => {
                setLastProductUpdate(Date.now());
                showMessage('success', 'Produktas sėkmingai redaguotas');
            });
    }, [editProductData]);


    const showMessage = (type, text) => {
      setMessage({
        type,
        text,
        show: true
      });
      setInterval(() => setMessage({show: false}), 8000);
    }

  return (
    <BackContext.Provider value={
      {products, 
      setCreateProductData, 
      message,
      setDeleteProductData,
      modalProductData,
      setModalProductData,
      setEditProductData

      }}>
        <div className="container">
            <div className="row">
                     <NavBAr></NavBAr>
                     <ProductCreate></ProductCreate>
                    <ProductsList></ProductsList>
                    
            </div>
        </div>
        <Message></Message>
        <ProductEdit></ProductEdit>
    
    </BackContext.Provider>
  );
}

export default Back;