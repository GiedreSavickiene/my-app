import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
import NavBAr from './NavBar';
import { useState } from 'react';
import ProductsList from './ProductsList';

function Back() {

    const [products, setProducts] = useState(null);

  return (
    <BackContext.Provider value={{products}}>
        <div className="container">
            <div className="row">
                     <NavBAr></NavBAr>
                     <div className="col-5">
                        CREATE
                     </div>
                    <ProductsList></ProductsList>
            </div>
        </div>
    
    </BackContext.Provider>
  );
}

export default Back;