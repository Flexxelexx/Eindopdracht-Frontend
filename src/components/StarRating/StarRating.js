import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import "./StarRating.module.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={75}
            />
          </label>
        );
      })}

      {rating === 0 && (
        <h3>Jij hebt deze vangst nog geen beoordeling gegeven!</h3>
      )}
      {rating === 1 && <h3>Jij hebt deze vangst 1 ster gegeven!</h3>}
      {rating > 1 && <h3>Jij hebt deze vangst {rating} sterren gegeven!</h3>}
    </div>
  );
};

export default StarRating;
