import React from 'react'
import '../Signup/Authentication.css'

function Signup() {
  return (
    <>
      <form>
        <div className="form-container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <label htmlFor="email">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            required=""
          />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required="" />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required=""
          />
          <label htmlFor="email">
            <b>Phone Number</b>
          </label>
          <br />
          <select name="phoneCode" required="">
            <option selected="" hidden="" value="">
              Code
            </option>
            <option value={66}>+98</option>
            <option value={66}>+99</option>
            <option value={66}>+90</option>
            <option value={66}>+66</option>
          </select>
          <input type="phone" name="phone" placeholder={812345678} required="" />
          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms &amp; Privacy
            </a>
            .
          </p>
          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>

    </>
  )
}

export default Signup