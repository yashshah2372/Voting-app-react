import React from "react";

class Product extends React.Component{
    render(){
        // console.log(this.props);
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.productImageUrl} alt="img"/>
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        <a>
                            <i className="large caret up icon" />
                        </a>
                        {this.props.votes}
                    </div>
                    <div className="description">
                        <a href="#">{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        <span> Submitted by:</span>
                        <img 
                         className="ui avatar image"
                         alt="avatar img"
                         src={this.props.authorImageUrl}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;