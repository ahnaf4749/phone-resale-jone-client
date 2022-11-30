import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Authprovider/Authprovider';

const Signup = () => {
    const { creatUser, googleLogin, updateUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()


    const handleSignup = data => {
        console.log(data);
        creatUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user.uid) {
                    toast.success('Creat succesfully')
                }

                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data)
                    })
                    .catch(err => {
                        console.error(err);
                    })

            })
            .catch(error => console.error(error))
    }

    const saveUser = (user) => {
        // const user = { name, email, role }
        fetch('https://resale-jone-servar.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/')
                window.location.reload()
            })
    }



    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;

                const googleUser = {
                    name: user.displayName,
                    email: user.email
                }
                saveUser({ ...googleUser, role: 'Buyer' })

                console.log(googleUser);
                if (user.uid) {
                    toast.success('login succesfully')
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-bold'>Sign up</h2>
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
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Please selected one</span>
                        </label>

                        <select type="role" {...register("role")} className="select select-bordered w-full max-w-xs" required>
                            <option>Buyer</option>
                            <option>Sellar</option>
                        </select>
                    </div>
                    <input className='w-full btn btn-accent mt-5' value='Sign up' type="submit" />
                </form>
                <p className='mt-4'>Already have an acount <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='font-bold btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;