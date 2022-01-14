import type { ReactElement } from "react";
import logo from "../../public/logo.svg";
import "./Bookings.scss";

export default function Booking(): ReactElement | null {
  //todo imput
  return (
    <div className="booking">
      <div className="booking__top">
        <h1>Online booking</h1>
        <p>Soon</p>
      </div>
      <div className="booking__contact">
        <img src={logo} alt="logo" />
        <p>
          Leave us your email address and we’ll let you know as soon as the
          machine will start.
        </p>
        <form className="form">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            placeholder="e.g. mynameislaura@mail.com"
          />
        </form>
        <button className="btn">Let me know!</button>
      </div>
    </div>
  );
}
