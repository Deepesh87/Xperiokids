import React from "react";
import { useNavigate } from "react-router-dom";
import scienceFlyer from "../../assets/Summer_robotics.png";
import roboticsFlyer from "../../assets/Summer_science.png";

const SummerCampLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">Welcome to the Summer Camp 2025</h1>
        <p className="text-lg text-gray-700">
          Choose a track below to learn more and enroll:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          className="cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg rounded-xl overflow-hidden"
          onClick={() => navigate("/science")}
        >
          <img
            src={scienceFlyer}
            alt="Science Summer Camp Flyer"
            className="w-full h-auto object-cover"
          />
        </div>

        <div
          className="cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg rounded-xl overflow-hidden"
          onClick={() => navigate("/robotics")}
        >
          <img
            src={roboticsFlyer}
            alt="Robotics Summer Camp Flyer"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SummerCampLanding;