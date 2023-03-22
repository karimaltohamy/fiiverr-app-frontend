import React, { useEffect, useState } from 'react'
import "./pay.scss"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from '../../utils/newRequest';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../checkoutForm/CheckoutForm';

const stripePromise = loadStripe("pk_test_51MXOozKG4U03U9qEEk43RNLqTINvRYvsoY1Ot8dvGB8PjaLw6qOMmZapPXsY3c1MknCOhpvTCNZxgBFS9OppjINX00rsTIdB3o");

const Pay = () => {
    const [clientSecret, setClientSecret] = useState();
    const {id} = useParams()

    useEffect(()=> {
        const requestStrip = async() => {
            try {
                const {data} = await newRequest.post(`/orders/create-payment-intent/${id}`)
                setClientSecret(data.clientSecret)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        } 
        requestStrip()
    }, [])

    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

  return (
    <div className="pay">
      <div className="container">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      </div>
    </div>
  )
}

export default Pay