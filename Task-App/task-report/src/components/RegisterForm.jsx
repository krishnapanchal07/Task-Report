import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import axios from "../api";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  //for register user
  const onSubmit = async (data) => {
    try {
      await axios.post("/user/register", data);
       navigate("/login", { state: { fromRegister: true } });
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-wrapper">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Register</h3>

        <label>Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}

        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}

        <button type="submit">Register</button>
        <p className="login-redirect">
          Already have an account?
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="login-link-btn"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
