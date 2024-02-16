import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div>
      <div class="card">
        <img
          src="https://do-yoga.s3.amazonaws.com/36/e38339e0-5426-414f-a3ce-99b663b99378.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Sanjay Kumar</h5>
          <p class="card-text">LOcation</p>
          <p class="card-text">Experience</p>
        </div>
      </div>
    </div>
  );
}
