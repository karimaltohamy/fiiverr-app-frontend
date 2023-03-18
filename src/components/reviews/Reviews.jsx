/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Review from "../review/Review";
import "./reviews.scss";

const Reviews = ({ gigId }) => {
  const { id } = useParams();
  const [reviews, setReviews] = useState();
  const [error, setError] = useState();

  const getReviews = async () => {
    try {
      const { data } = await newRequest.get(`/reviews/${gigId}`);
      setReviews(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, [id, gigId]);

  const AddReview = async (e) => {
    e.preventDefault();

    const desc = e.target[0].value;
    const star = e.target[1].value;

    try {
      await newRequest.post("/reviews", { gigId, desc, star });
      getReviews();
      e.target[0].value = "";
      e.target[1].value = "";
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  return (
    <div className="reviews">
      <h3>Reviews</h3>

      <div className="items">
        {reviews
          ? reviews.length > 0
            ? reviews.map((review, index) => {
                return <Review review={review} key={index} />;
              })
            : "no reviews!"
          : "Loading..."}
      </div>

      <form className="add-review" onSubmit={AddReview}>
        <div className="inputs">
          <input type="text" placeholder="write your review" />
          <select>
            <option value="1" defaultChecked>
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button className="btn-addRev">Add Review</button>
        <span className="error">{error && error}</span>
      </form>
    </div>
  );
};

export default Reviews;
