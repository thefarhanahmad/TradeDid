import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginSuccess } from "../../store/slices/authSlice";

const OTPForm = () => {
  const location = useLocation(); // Fetch state from the navigation
  const navigate = useNavigate(); // Use navigate for future navigation
  const [otp, setOtp] = useState(""); // State to store OTP input
  const { email } = location.state || {}; // Destructure email and password from state

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to verify the OTP
    console.log("Email:", email);
    console.log("OTP:", otp);
    localStorage.setItem("email", email);
    dispatch(loginSuccess(email));
    navigate("/dashboard/overview");
  };

  return (
    <div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div>
          Email sent Icon
          <span>Please check your email</span>
          <p>we've sent a code to {email}</p>
        </div>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)} // Update OTP state on change
          placeholder="Enter OTP"
          className="w-full p-2 mb-4 border border-[#023f7f] rounded-md outline-none"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-[#023f7f] text-white rounded-md outline-none"
        >
          Verify OTP
        </button>

        <div className="w-full flex justify-center items-center">
          <Link to="/forgot-password" className="p-2 mx-auto text-[#023f7f]">
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default OTPForm;
