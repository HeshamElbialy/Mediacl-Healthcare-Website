import React from "react";

const Bookform = () => {
  return (
    <div className="form">
      <h3>Book Appointment</h3>
      <form action="" className="form">
        <div className="input">
          <label for="cars"></label>
          <select name="" id="cars">
            <option value="Select Department">Select Department</option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </div>
        <div className="input">
          <label for="cars"></label>
          <select name="" id="cars">
            <option value="Select Doctors">Select Doctors</option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </div>
        <div className="input">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="input">
          <input
            type="number"
            id="name"
            name="name"
            placeholder="Number"
            required
          />
        </div>
        <div className="input">
          <input id="datePicker" type="date" />
        </div>
        <div className="button">
          <button href="#/">Appointment Now</button>
        </div>
      </form>
    </div>
  );
};

export default Bookform;
