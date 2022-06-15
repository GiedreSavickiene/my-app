function Product({product}){
    return(
        <div className="product">
            <div className="product_bin">
                {product.title}
            </div>
        </div>
    )
}
export default Product;