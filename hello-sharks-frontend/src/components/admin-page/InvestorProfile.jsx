// import React from 'react';
import "./InvestorProfile.css";
import img from "../admin-page/aman.jpg";

const InvestorProfile = () => {
  const investor = {
    name: "Aman Gupta",
    photo: <img src={img} alt="images" />,
    company: "boAt Lifestyle",
    role: "CEO & Co-Founder",
    netRevenue: "₹3,000 Crore ",
    description:
      "boAt Lifestyle is an Indian company that designs and markets consumer electronics products such as headphones, earphones, smartwatches, and speakers. It is one of the fastest-growing brands in the audio industry.",
  };

  return (
    <div className="container investor-profile">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img
            src={investor.photo}
            alt={`${investor.name}'s profile`}
            className="img-fluid rounded-circle profile-photo"
          />
        </div>
        <div className="col-md-8">
          <h2 className="investor-name">{investor.name}</h2>
          <p>
            <strong>Company:</strong> {investor.company}
          </p>
          <p>
            <strong>Role:</strong> {investor.role}
          </p>
          <p>
            <strong>Net Revenue:</strong> {investor.netRevenue}
          </p>
          <p className="company-description">
            <strong>About the Company:</strong> {investor.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestorProfile;
