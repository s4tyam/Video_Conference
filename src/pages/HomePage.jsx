import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css"; 

const HomePage = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  return (
    <div className="home-page">
      <form className="home-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Join a Room</h1>
        <div className="form-group">
          <label className="form-label">Enter Room Code</label>
          <input
            className="form-input"
            type="text"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            required
            placeholder="Enter Your Room Code"
          />
        </div>
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;
