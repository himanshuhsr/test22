import React from 'react';
import { productData } from './data/data';
import {Button} from 'react-bootstrap';
import ProductMain from './ProductMain';
import CartMain from './CartMain';


export default function Products() {


    return (
        <div className="container-fluid">
            <div className="row">
                {/* Product Area */}
                <div className="col-md-6 col-lg-6 col-12">
                    <h1 className="mainHeading">Products</h1>
                    <ProductMain data={productData} />
                </div>
                {/* Cart Area */}
                <div className="col-md-6 col-lg-6 col-12">
                    <h1 className="mainHeading">Cart</h1>
                    <CartMain data ={productData} />
                </div>
            </div>
        </div>
    )

}
