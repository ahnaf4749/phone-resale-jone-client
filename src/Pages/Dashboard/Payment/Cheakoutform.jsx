import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const Cheakoutform = ({ data }) => {

    const [errorCard, setErrorCard] = useState('')
    const [succeed, setSucceed] = useState('')
    const [proccesing, setProccesing] = useState(false)
    const [transationId, setTransationId] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    const { resale_price, email, userName } = data;

    useEffect(() => {
        if (resale_price) {
            fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ resale_price }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [resale_price]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setErrorCard(error.message)
        }
        else {
            setErrorCard('')
        }
        setSucceed('')
        setProccesing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setErrorCard(confirmError.message)
            return
        }
        console.log('paymentIntent', paymentIntent);
        if (paymentIntent.status === "succeeded") {
            setSucceed('congrats! your payment successfully');
            setTransationId(paymentIntent.id);
        }
        setProccesing(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-ghost btn-active btn-sm mt-5' type="submit" disabled={!stripe || proccesing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{errorCard}</p>
            {
                succeed &&
                <div>
                    <p className='text-yellow-500'>{succeed}</p>
                    <p>Your Transationid: <span className='font-bold'>{transationId}</span> </p>
                </div>
            }
        </>
    );
};

export default Cheakoutform;