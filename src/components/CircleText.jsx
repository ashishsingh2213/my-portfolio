import React, { useEffect } from 'react';
import "../styles/CircleText.css";

const CircleText = () => {
  useEffect(() => {
    const text = document.querySelector('.text p');

    if (text) {
      // Splitting text into individual characters and wrapping them in span tags with appropriate rotation
      text.innerHTML = text.innerText.split("").map(
        (char, i) => `<span style="transform:rotate(${i * 13.9}deg)">${char}</span>`
      ).join("");
    }
  }, []); // Empty dependency array to run the effect only once after initial render

  return (
    <div className="circle-container">
      <div className="circle">
        <div className="logo"></div>
        <div className="text">
          <p>SCROLL DOWN-SCROLL DOWN </p>
        </div>
      </div>
    </div>
  );
};

export default CircleText;
