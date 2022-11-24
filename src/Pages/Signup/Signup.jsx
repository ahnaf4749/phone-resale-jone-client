import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { AuthContext } from '../../Authprovider/Authprovider';

const Signup = () => {
    const { creatUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()


    const handleSignup = data => {
        creatUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (userEvent.uid) {
                    toast.success('sucess')
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" {...register("name")} placeholder="Your Name" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="Your Email" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'required',
                            minLength: { value: 8, message: 'password minimum 8 carectart' },
                            // pattern: { value: /([!@#$%^&*])([a-z])/, message: 'passwors must be strong' }
                        })} placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p>{errors.password.message}</p>}

                    </div>
                    <input className='w-full btn btn-accent mt-5' value='Sign up' type="submit" />
                </form>
                <p className='mt-4'>Already have an acount <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='font-bold btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;