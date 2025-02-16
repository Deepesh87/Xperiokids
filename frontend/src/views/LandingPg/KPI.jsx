import React from "react";
import Style from "./Landing.module.css";
import { FaStar } from "react-icons/fa";

function KPI() {
  const googleRating = 4.9; // Replace with actual Google rating
  const reviewLink = "https://maps.app.goo.gl/2nkiPgKQfWt7qHzk6";

  return (
<div className={Style.kpiContainer}>
  <h3 className={Style.kpiSubtitle}>Our Google Rating</h3>
  <a href={reviewLink} target="_blank" rel="noopener noreferrer" className={Style.kpiLink}>
    <div className={Style.kpiValue}>
      {googleRating}{" "}
      <span className={Style.stars}>
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} color={index < Math.round(googleRating) ? "#FFD700" : "#ccc"} />
        ))}
      </span>
    </div>
  </a>
</div>

  );
}

export default KPI;
