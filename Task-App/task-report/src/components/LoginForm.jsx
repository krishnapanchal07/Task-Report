import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../api";

const LoginForm = () => {
  const location = useLocation();
  const fromRegister = location.state?.fromRegister;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/user/login", data);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard"); // for navigate after successfully login
    } catch (err) {

      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>

      <label>Email</label>
      <input
        type="email"
        {...register("email", {
          required: "Email is required",
        })}
      />
      {errors.email && <span className="error">{errors.email.message}</span>}

      <label>Password</label>
      <input
        type="password"
        {...register("password", {
          required: "Password is required",
        })}
      />
      {errors.password && (
        <span className="error">{errors.password.message}</span>
      )}

      <button type="submit">Login</button>
      {/* show register link for not not register user */}
      {!fromRegister && (
        <p className="redirect-link">
          Don’t have an account? <Link to="/register">Register</Link>  
        </p>
      )}
    </form>
  );
};

export default LoginForm;
