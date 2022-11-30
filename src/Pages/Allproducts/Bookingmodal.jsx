import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Authprovider/Authprovider';

const Bookingmodal = ({ booking, setBooking }) => {
    const { user } = useContext(AuthContext)

    const { name, image, original_price, seller_name, resale_price } = booking

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const email = form.email.value;
        const sellar_name = form.sellar_name.value;
        const orginal_price = form.orginal_price.value;
        const resale_price = form.resale_price.value;
        const phone = form.phone.value;
        const metting = form.metting.value;

        const booking = {
            userName: userName,
            phoneName: name,
            email,
            image,
            sellar_name,
            orginal_price,
            resale_price,
            phone,
            metting

        }

        fetch('https://resale-jone-servar.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    setBooking(null)
                    toast.success('Booking succesfully')
                }
                else {
                    toast.error(data.message)
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="" disabled defaultValue={user?.email} placeholder="" className="input input-bordered w-full" />
                        <input name='sellar_name' type="" disabled defaultValue={seller_name} placeholder="" className="input input-bordered w-full" />
                        <input name='orginal_price' type="" disabled defaultValue={original_price} placeholder="" className="input input-bordered w-full" />
                        <input name='resale_price' type="" disabled defaultValue={resale_price} placeholder="" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Your Phon Number" className="input input-bordered w-full" required />
                        <input name='metting' type="text" placeholder="Meeting location" className="input input-bordered w-full" required />
                        <input className='btn btn-accent w-full' type='submit' value='Submit'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bookingmodal;