import React from "react";
import "./messageTable.scss";

const MessageTable = () => {
  const message =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam nesciunt doloremque tenetur architecto et ipsum nulla id asperiores quos, temporibus eaque, quidem beatae? Praesentium minima laboriosam asperiores maxime repellendus.";
  return (
    <div className="messages-table">
      <div className="container">
        <div className="head">
          <h2>Messages</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="active">
              <td>
                <span>Maria Anders</span>
              </td>
              <td>
                <p>{message.slice(0, 100)}...</p>
              </td>
              <td>
                <p>1 hour ago</p>
              </td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>
                <span>Maria Anders</span>
              </td>
              <td>
                <p>{message.slice(0, 100)}...</p>
              </td>
              <td>
                <p>1 hour ago</p>
              </td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
            <tr>
              <td>
                <span>Maria Anders</span>
              </td>
              <td>
                <p>{message.slice(0, 100)}...</p>
              </td>
              <td>
                <p>1 hour ago</p>
              </td>
              <td>
                <button>Mark as Read</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageTable;
