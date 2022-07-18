import React from "react";
import Product from "./Product";
import Seed from "../seed";
class ProductList extends React.Component{
    render(){
        // const product = Seed.products[0];
        const productComponents = Seed.products.map((product)=>(
            <Product 
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            authorImageUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
            />
        ))
        return(
            <div className="ui unstackable items">
                {productComponents}
            </div>
        )
    }
}

export default ProductList;