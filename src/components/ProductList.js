import React from "react";
import Product from "./Product";
import Seed from "../seed";

class ProductList extends React.Component{
    state={
        products:[]
    }
    componentDidMount(){
        this.setState({products:Seed.products});
    }
    handleProductUpVote=(productId)=>{
       const nextProducts = this.state.products.map((product)=>{
        if(product.id === productId){
            return {
                ...product,
                votes:product.votes + 1
            }
        }
        return product;
       });
       this.setState({products:nextProducts});
    }
    render(){
        const product = this.state.products.sort((prod1,prod2)=>{
            return prod2.votes - prod1.votes
        });
        const productComponents = product.map((product)=>(
            <Product 
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            authorImageUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
            onUpVote={this.handleProductUpVote}
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