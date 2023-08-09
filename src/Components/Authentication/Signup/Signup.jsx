import React from 'react'
import '../Signup/Authentication.css'

function Signup() {
  return (
    <>
      <form>
        <div className="form-container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
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