import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';

const Login = () => {

    const { login } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();


    const handleLogin = data => {
        console.log(data);
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(err => {
                console.error(err);
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email")} placeholder="Your Email" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget Password ?</span></label>
                    </div>
                    <div>
                        {/* {loginError && <p>{loginError}</p>} */}
                    </div>
                    <input className='w-full btn btn-accent' value='Login' type="submit" />
                </form>
                <p className='mt-4'>Don't have an account yet? <Link className='text-secondary' to='/signup'>Sign up</Link></p>
                <div className="divider">OR</div>
                <button className='font-bold btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;