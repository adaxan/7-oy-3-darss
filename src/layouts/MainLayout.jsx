import React from "react";
import { useNavigate } from "react-router-dom";

function MainLayout({ children }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto bg-white shadow-xl rounded-md p-3 flex justify-evenly">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-primary"
        >
          Clock
        </button>
        <button
          onClick={() => {
            navigate("/timer");
          }}
          className="btn btn-accent"
        >
          Timer
        </button>
        <button
          onClick={() => {
            navigate("/time");
          }}
          className="btn btn-info"
        >
          Time
        </button>
      </div>
        <div>{children}</div>
    </div>
  );
}

export default MainLayout;
