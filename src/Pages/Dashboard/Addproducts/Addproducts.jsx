import React from 'react';
import { useForm } from 'react-hook-form';

const Addproducts = () => {

    const { register, handleSubmit } = useForm()
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);


    const handleSignup = (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    console.log(imageData.data.url);
                }
            })
    }



    return (
        <form onSubmit={handleSubmit(handleSignup)}>
            <div className='grid lg:grid-cols-2 '>
                <div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your product name?</span>
                        </label>
                        <input type="Product_name" {...register("Product_name")} placeholder="product name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Pick your product image</span>
                        </label>
                        <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your product brand name?</span>
                        </label>
                        <input type="brand" {...register("brand")} placeholder="brand name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your product model?</span>
                        </label>
                        <input type="model" {...register("model")} placeholder="product model" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your product orginal price?</span>
                        </label>
                        <input type="orginal_price" {...register("orginal_price")} placeholder="product orginal price" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your product resale price?</span>
                        </label>
                        <input type="resale_price" {...register("resale_price")} placeholder="product resale price" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="name" {...register("name")} placeholder="your name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your location?</span>
                        </label>
                        <input type="location" {...register("location")} placeholder="your location" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product condetion?</span>
                        </label>
                        <input type="condetion" {...register("condetion")} placeholder="Product condetion" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">product used?</span>
                        </label>
                        <input type="used" {...register("used")} placeholder="product used" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <input className='btn btn-accent mt-5' value='Sign up' type="submit" />
            </div>
        </form>
    );
};

export default Addproducts;