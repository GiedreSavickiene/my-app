function Product({product}){
    return(
        <div className="product">
            <div className="product_bin">
                <div className="product_bin_top">
                    <h2>{product.title}</h2><i>{product.code}</i> 
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
                     <span>{product.price}</span>
                    <button>Pirkti</button>
                </div>
            </div>
        </div>
        
    )
}
export default Product;