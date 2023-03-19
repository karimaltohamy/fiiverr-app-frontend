/* eslint-disable react/jsx-key */
import React from "react";
import "./messageTable.scss";
import newRequest from "../../utils/newRequest";
import moment from "moment";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const MessageTable = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  
  const handleRead = async(id) => {
    try {
      await newRequest.put(`/conversations/${id}`)
      refetch()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="messages-table">
      <div className="container">
        <div className="head">
          <h2>Messages</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>{currentUser.isSeller ? "buyer" : "seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? "Loading" : error ? "something error" : 
            data.map((c, index) => {
              return (
                <tr
                  key={index}
                  className={
                    ((!currentUser.isSeller && !c.readByBuyer) ||
                      (currentUser.isSeller && !c.readBySeller)) 
                      ? "active" : ""
                   }
                >
                  <td>
                    <span>
                      {currentUser.isSeller ? c.buyerId : c.sellerId}
                    </span>
                  </td>
                  <td>
                    <Link to={`/message/${c.id}`}>
                      { c.lastMessage && c.lastMessage.slice(0, 100)}...
                    </Link>
                  </td>
                  <td>
                    <p>{moment(c.updatedAt).fromNow()}</p>
                  </td>
                  <td>
                    {((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)) && (
                        <button onClick={() => handleRead(c.id)}>Mark as Read</button>
                      )}
                  </td>
                </tr>
              );
            })
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageTable;
