/* eslint-disable react/jsx-key */
import React, { useReducer, useState } from "react";
import { gigReducer, INITIAL_STATE } from "../../reduceres/gigReduce";
import { useNavigate } from "react-router-dom";
import "./addGig.scss";
import upload from "../../utils/upload"
import newRequest from "../../utils/newRequest";

const AddGig = () => {
  const [file, setFile] = useState("")
  const [files, setFiles] = useState([])
  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE)
  const [uploading, setUploading] = useState(false)
  const [feature, setAddFeature] = useState("")
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({type: "CHANGE_INPUTS", payload: {name: e.target.name, value: e.target.value}})
  }

  const handleImages = async (e) => {
    e.preventDefault()

    setUploading(true)
    try {
      const cover = await upload(file)
      
      const images = await Promise.all(
        [...files].map(async file => {
          const url = await upload(file)
          return url  
        })
      )

      dispatch({ type: "IMAGES_CHANGE", payload: { cover, images } });
      setUploading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFeatures = (e) => {
    e.preventDefault()

    dispatch({ type: "ADD_FEATURES", payload: feature });
    setAddFeature("")
  }

  const removeFeature = (feature) => {
    dispatch({ type: "REMOVE_FEATURES", payload: feature });
  }

  const handleCreateGig = async (e) => {
    e.preventDefault()

    try {
      await newRequest.post("/gigs", state)
      navigate("/myGigs")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="add-gig">
      <div className="container">
        <h1 className="title">Add New Gig</h1>
        <form className="row">
          <div className="left">
            <div className="input-item">
              <label htmlFor="">Title</label>
              <input
                type="text"
                name="title"
                placeholder="write title here"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="input-item">
              <label htmlFor="">Category</label>
              <select name="cat" onChange={(e) => handleChange(e)}>
                <option value="design">Design</option>
                <option value="web-development">Web Development</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
              </select>
            </div>

            <div className="images">
              <div className="images-inputs">
                <div className="input-item">
                  <label htmlFor="">Cover Image</label>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                <div className="input-item">
                  <label htmlFor="">Upload Images</label>
                  <input
                    type="file"
                    onChange={(e) => setFiles(e.target.files)}
                    multiple
                  />
                </div>
              </div>
              <button className="btn-upload" onClick={handleImages}>
                {uploading ? "Uploading" : "upload"}
              </button>
            </div>

            <div className="input-item">
              <label htmlFor="">Description</label>
              <textarea
                name="desc"
                id=""
                className="long-desc"
                placeholder="Brief description to introduce your service to customers"
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
          </div>
          <div className="right">
            <div className="input-item">
              <label htmlFor="">Service Title</label>
              <input
                type="text"
                name="shortTitle"
                placeholder="write title here"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input-item">
              <label htmlFor="">Short Description</label>
              <textarea
                name="shortDesc"
                id=""
                className="short-desc"
                placeholder="short description of your service"
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            <div className="input-item">
              <label htmlFor="">Delivary Time(e.gdays)</label>
              <input
                type="number"
                name="delivaryTime"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input-item">
              <label htmlFor="">Revision Number</label>
              <input
                type="number"
                name="revisionNumber"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="features">
              <div className="input-item">
                <label htmlFor="">Add Features</label>
                <div>
                  <input
                    type="text"
                    placeholder="add features"
                    name="addFeatures"
                    value={feature}
                    onChange={(e) => setAddFeature(e.target.value)}
                  />
                  <button className="btn-add" onClick={handleFeatures}>
                    add
                  </button>
                </div>
              </div>

              <div className="values">
                {state.addFeatures &&
                  state.addFeatures.map((feature, index) => (
                    <span key={index}>
                      {feature}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        onClick={() => removeFeature(feature)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  ))}
              </div>
            </div>

            <div className="input-item">
              <label htmlFor="">Price</label>
              <input
                type="number"
                name="price"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button
              type="submit"
              className="btn-create"
              onClick={handleCreateGig}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGig;
