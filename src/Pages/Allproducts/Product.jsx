import React from 'react';

const Product = ({ product }) => {

    const { brand } = product;

    return (
        <div>
            <p>{brand}</p>
        </div>
    );
};

export default Product;