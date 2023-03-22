/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./orders.scss";
import "../../mainTable.scss"

const Orders = () => {
  const [orders, setOrders] = useState();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate()

  const getOrders = async () => {
    try {
      const { data } = await newRequest.get("/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const handleConect = async(order) => {

    const id = order.sellerId + order.buyerId

    try {
      const res = await newRequest.get(`/conversations/single/${id}`)
      navigate(`/message/${id}`)
    } catch (error) {
      if (error.response.status === 404) {
       const {data} = await newRequest.post(`/conversations`, {to: currentUser.isSeller ? order.buyerId :  order.sellerId})
        navigate(`/message/${data.id}`)
      }
      console.log(error)
    }
  }

  return (
    <div className="orders">
      <div className="container">
        <div className="head">
          <h2>Orders</h2>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {orders
                ? orders.map((order, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <img src={order.img} alt="" />
                        </td>
                        <td>
                          <span>{order.title}</span>
                        </td>
                        <td>
                          <span>{order.price}</span>
                        </td>
                        <td>
                          <button onClick={() => handleConect(order)} className="icon-message">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : "Loading"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
