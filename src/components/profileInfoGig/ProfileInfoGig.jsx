import React from "react";
import "./profileInfoGig.scss";

const ProfileInfoGig = () => {
  return (
    <div className="profile-info">
      <div className="user-state">
        <div className="item">
          <span>From</span>
          <p>Sri Lanka</p>
        </div>
        <div className="item">
          <span>Member since</span>
          <p>Sri LankaJun 2022</p>
        </div>
        <div className="item">
          <span>Avg. response time</span>
          <p>1 hour</p>
        </div>
        <div className="item">
          <span>Last delivery</span>
          <p>3 days</p>
        </div>
        <div className="item">
          <span>Languages</span>
          <p>Sinhala, English</p>
        </div>
      </div>
      <div className="user-desc">
        <p>
          Hello, My name is Binura. I'm professional in video editing and motion
          graphics. I'm very proficient with programs like, Adobe premiere pro,
          Adobe after effects, Adobe illustrator and Adobe photoshop, etc. I
          love putting in extra effort to satisfy my clients, so Kindly contact
          me, because I'm always looking for new opportunities and I promise a
          top-notch outcome. Thank you!
        </p>
      </div>
    </div>
  );
};

export default ProfileInfoGig;
