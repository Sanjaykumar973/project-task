import React from "react";
import Card from "./Card";
import "./TeacherBar.css";

export default function TeachersBar() {
  return (
    <div>
      <h1 className="heading">All our Yoga Teachers</h1>
      <div className="card-view">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className="view-btn">View All </button>
    </div>
  );
}
