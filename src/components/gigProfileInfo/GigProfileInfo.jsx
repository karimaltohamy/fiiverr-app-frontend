import React from "react";
import { format } from "date-fns";

const GigProfileInfo = ({ gig }) => {
  return (
    <div className="profile-info">
      <div className="user-state">
        <div className="item">
          <span>From</span>
          <p>{gig.userId.country}</p>
        </div>
        <div className="item">
          <span>Member since</span>
          <p>{format(new Date(gig.userId.createdAt), "do MMMM Y")}</p>
        </div>
        <div className="item">
          <span>Avg. response time</span>
          <p>3 hour</p>
        </div>
        <div className="item">
          <span>Last delivery</span>
          <p>1 days</p>
        </div>
        <div className="item">
          <span>Languages</span>
          <p>Sinhala, English</p>
        </div>
      </div>
      <div className="user-desc">
        <p>{gig.userId.desc}</p>
      </div>
    </div>
  );
};

export default GigProfileInfo;
