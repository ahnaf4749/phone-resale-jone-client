import React from 'react';

const Product = ({ product }) => {

    const { brand, image, name, model, original_price, seller_name, used, resale_price, condition, location } = product;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='' style={{ height: '350px' }} src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="overflow-x-auto flex">
                    <table className="table w-full">
                        <p className='p-1 font-bold border'>Name</p>
                        <p className='p-1 font-bold border my-2'>Brand</p>
                        <p className='p-1 font-bold border'>Model</p>
                        <p className='p-1 font-bold border my-2'>Market Price</p>
                        <p className='p-1 font-bold border my-2'>Cureant Price</p>
                        <p className='p-1 font-bold border my-2'>Manth of used</p>
                        <p className='p-1 font-bold border my-2'>Condetion</p>
                        <p className='p-1 font-bold border my-2'>Sellar name</p>
                        <p className='p-1 font-bold border my-2'>Location</p>
                    </table>
                    <table className="table w-full">
                        <p className='p-1 font-semibold border'>{name}</p>
                        <p className='p-1 font-semibold border my-2'>{brand}</p>
                        <p className='p-1 font-semibold border'>{model}</p>
                        <p className='p-1 font-semibold border my-2'>{original_price} Taka</p>
                        <p className='p-1 font-semibold border my-2'>{resale_price} Taka</p>
                        <p className='p-1 font-semibold border my-2'>{used}</p>
                        <p className='p-1 font-semibold border my-2'>{condition}</p>
                        <p className='p-1 font-semibold border my-2'>{seller_name}</p>
                        <p className='p-1 font-semibold border my-2'>{location}</p>
                    </table>
                </div>
                <div className="card-actions justify-between">
                    <button className="btn btn-primary">Book now</button>
                    <button className="btn btn-primary">Add to Wish</button>
                </div>
            </div>
        </div>
    );
};

export default Product;