import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Allproducts = () => {

    const products = useLoaderData()

    return (
        <div>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Allproducts;