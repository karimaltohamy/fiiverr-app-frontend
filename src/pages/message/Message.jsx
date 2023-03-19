/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./message.scss";

const Message = () => {
  const {id} = useParams()
  const [messages, setMessages] = useState([])
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate()


  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  })


  const writeMessage = async(e) => {
    e.preventDefault()

    try {
      await newRequest.post("/messages", {
        conversationId: id,
        desc: e.target[0].value
      })
      refetch()
      navigate(`/message/${id}`)
      e.target[0].value = ""
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> {">"} John Doe {">"}
        </span>
        <div className="messages">
          { isLoading ? "Loading.." : error ? "something error" : data.map((message, index) => {
            return  <div key={index} className={currentUser._id === message.userId ? "item owner" : "item"}>
            <div className="image">
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <p>
              {message.desc}
            </p>
          </div>
          })}
        </div>
        <hr />
        <form className="write" onSubmit={writeMessage}>
          <textarea type="text" placeholder="write a message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
