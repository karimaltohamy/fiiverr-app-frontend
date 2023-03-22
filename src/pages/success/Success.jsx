import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';

const Success = () => {
    const paymentIntent = new URLSearchParams(window.location.search).get(
        "payment_intent"
      );
      const navigate = useNavigate()

      useEffect(() => {
        const makeRequest = async() => {
            try {
                await newRequest.put("/orders", {paymentIntent})
                setTimeout(() => {
                    navigate("/orders")
                }, 100)
            } catch (error) {
                console.log(error)
            }
        }
        makeRequest()
      },[])
  return (
    <div>Payment Succssfull</div>
  )
}

export default Success