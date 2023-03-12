import React from "react";
import "./addGig.scss";

const AddGig = () => {
  return (
    <div className="add-gig">
      <div className="container">
        <h1 className="title">Add New Gig</h1>
        <form className="row">
          <div className="left">
            <div className="input-item">
              <label htmlFor="">Title</label>
              <input type="text" placeholder="write title here" />
            </div>

            <div className="input-item">
              <label htmlFor="">Category</label>
              <select>
                <option value="design">Design</option>
                <option value="web-development">Web Development</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
              </select>
            </div>

            <div className="input-item">
              <label htmlFor="">Cover Image</label>
              <input type="file" />
            </div>

            <div className="input-item">
              <label htmlFor="">Upload Images</label>
              <input type="file" />
            </div>

            <div className="input-item">
              <label htmlFor="">Description</label>
              <textarea
                name=""
                id=""
                className="long-desc"
                placeholder="Brief description to introduce your service to customers"
              ></textarea>
            </div>

            <button type="submit" className="btn-create">
              Create
            </button>
          </div>
          <div className="right">
            <div className="input-item">
              <label htmlFor="">Service Title</label>
              <input type="text" placeholder="write title here" />
            </div>
            <div className="input-item">
              <label htmlFor="">Short Description</label>
              <textarea
                name=""
                id=""
                className="short-desc"
                placeholder="short description of your service"
              ></textarea>
            </div>
            <div className="input-item">
              <label htmlFor="">Delivary Time(e.gdays)</label>
              <input type="text" />
            </div>
            <div className="input-item">
              <label htmlFor="">Revision Number</label>
              <input type="text" />
            </div>
            <div className="input-item">
              <label htmlFor="">Add Features</label>
              <input type="text" placeholder="e.g page desing" />
              <input type="text" placeholder="e.g file uploading" />
              <input type="text" placeholder="e.g setting up domain" />
              <input type="text" placeholder="e.g hosting" />
            </div>
            <div className="input-item">
              <label htmlFor="">Price</label>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGig;
