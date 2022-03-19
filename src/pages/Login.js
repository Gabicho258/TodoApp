import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loggued, loginUserAsync } from "../slices/userSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const isUserLoggued = useSelector(loggued);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const userToLogin = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    dispatch(loginUserAsync(userToLogin));
  };
  useEffect(() => {
    if (isUserLoggued) {
      navigate("/main");
    }
  }, [isUserLoggued]);
  return (
    <div>
      <h1 className="mt-3 m-auto ">Login</h1>
      <Form className="col-4 mt-5 m-auto " onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
        </Form.Group>
        <Form.Control type="password" placeholder="Password" />

        <Button variant="primary" type="submit" className="mt-2 mb-2">
          Login
        </Button>
      </Form>
      <Form.Text className="text-muted">
        You do not have an account yet? Create one{" "}
        <Link to="/register">here</Link>
      </Form.Text>
    </div>
  );
};
