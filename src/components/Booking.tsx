import React, { useState } from "react";
import logo from "/logo.svg";
import "./Bookings.scss";

const Booking = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(true);
    setSubmitted(true);
  }

  return (
    <div ref={ref} className="booking">
      <div className="booking__top">
        <h1>Online booking</h1>
        <p>Soon</p>
      </div>
      <div className="booking__contact">
        <img src={logo} alt="logo" />
        {submitted ? (
          <div className="booking__contact__submitted">
            <h1>Your email has been submitted succesfully.</h1>
          </div>
        ) : (
          <>
            <p>
              Leave us your email address and we’ll let you know as soon as the
              machine will start.
            </p>
            <form onSubmit={(e) => handleSubmit(e)} className="form">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                value={email}
                onChange={onUserInput}
                placeholder="e.g. mynameislaura@mail.com"
              />
              <button className="btn">
                {!loading ? (
                  "Let me know!"
                ) : (
                  <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
});

export default Booking;
