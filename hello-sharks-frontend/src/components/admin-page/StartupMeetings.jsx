// import React from "react";
import "./StartupMeetings.css";
import "bootstrap/dist/css/bootstrap.min.css";

const StartupMeetings = () => {
  const meetings = [
    {
      name: "Aman Gupta",
      date: "2024-12-15",
      time: "09:30 AM",
      link: "https://example.com/meeting1", // Replace with actual meeting link
    },
    {
      name: "Vineeta Singh",
      date: "2024-12-16",
      time: "02:00 PM",
      link: "https://example.com/meeting2",
    },
    {
      name: "Peyush Bansal",
      date: "2024-12-17",
      time: "11:00 AM",
      link: "https://example.com/meeting3",
    },
  ];

  const handleJoinClick = (link) => {
    window.open(link, "_blank"); // Opens the video call link in a new tab
  };

  return (
    <div className="entrepreneur-meetings container mt-5">
      <h1 className="text-center  mb-4">Meetings</h1>
      <div className="meeting-list">
        {meetings.map((meeting, index) => (
          <div
            className="meeting-card d-flex align-items-center justify-content-between shadow-sm p-3 mb-3 rounded "
            key={index}
          >
            <div className="meeting-details d-flex align-items-center">
              <p className="meeting-name mb-0 me-3">
                <strong>{meeting.name}</strong>
              </p>
              <p className="meeting-date mb-0 me-3">
                <strong>Date:</strong> {meeting.date}
              </p>
              <p className="meeting-time mb-0">
                <strong>Time:</strong> {meeting.time}
              </p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleJoinClick(meeting.link)}
            >
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupMeetings;
