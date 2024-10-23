import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Changed Navigate to useNavigate

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" }); // Initialize state with empty values
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update state based on input field name
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(formData); // Log form data for debugging
    navigate("/auth/otp", { state: formData }); // Navigate to /otp with form data
  };

  return (
    <div>
      <form className="w-full" onSubmit={handleSubmit}>
        {" "}
        {/* Add onSubmit handler here */}
        <input
          type="email"
          name="email"
          value={formData.email} // Bind to state
          onChange={handleChange} // Update state on change
          placeholder="Email"
          className="w-full p-2 mb-4 border border-[#023f7f] rounded-md outline-none"
          required // Optional: make the field required
        />
        <input
          type="password"
          name="password"
          value={formData.password} // Bind to state
          onChange={handleChange} // Update state on change
          placeholder="Password"
          className="w-full p-2 mb-4 border border-[#023f7f] rounded-md outline-none"
          required // Optional: make the field required
        />
        <button
          type="submit" // Change to type="submit" to trigger form submission
          className="w-full p-2 bg-[#023f7f] text-white rounded-md outline-none"
        >
          Get OTP
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

export default LoginForm;
