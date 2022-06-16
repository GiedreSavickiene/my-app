import { useState } from "react";

function Product({product}){

    const [count, setCount] = useState(1);

    const clickCount = e => {
        const count = parseInt(e.target.value);
        setCount(count > 0 ? count : 1);
    }
    return(
        <div className="product">
            <div className="product_bin">
                <div className="product_bin_top">
                    <h3>{product.title}</h3><i>{product.code}</i> 
                 </div>
                <div className="product_bin_mid">
                    <div className="product_bin_mid_img">
                        {
                            product.photo ? <img src={product.photo} alt={product.title}/> : <img src='http://localhost:3000/no-image.jpg' alt={product.title} ></img>
                        }
                        
                    </div>
                     <div className="product_bin_mid_desc">
                            <p>{product.description}</p>
                    </div>
                </div>
                <div className="product_bin_bottom">
                     <span>{product.price.toFixed(2)} EUR</span> 
                    <div>
                        <input type="number" value={count} onChange={clickCount} /> 
                     <button>Pirkti</button>
                </div>
                </div>
            </div>
        </div>
        
    )
}
export default Product;