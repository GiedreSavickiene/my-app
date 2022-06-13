function ProductLine({product}){
    console.log(product)

    return(
        <li className="list-group-item">
            <div className="product-line">
                <div className="product-line_content">
            
                <div className="product-line_content_top">
                    <div className="product-line_content_top_title">
                         {product.title}
                    </div>
                    <div className="product-line_content_top_price">
                         {(parseFloat(product.price)).toFixed(2)} eur
                    </div>
                    <div className="product-line_content_top_code">
                        {product.code}
                    </div>
                </div>
                <div className="product-line_content_bottom">
                    {product.description}
                </div>

            </div> 
            <div className="product-line_buttons">
                <button type="button" className="btn btn-success mr-2" >Redaguoti</button>
                <button type="button" className="btn btn-danger">Trinti</button>
            </div> 
         </div> 
            
        </li>
    )
}

export default ProductLine;