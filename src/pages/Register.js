import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUserAsync, userCreated } from "../slices/userSlice";

export const Register = () => {
  const dispatch = useDispatch();
  const created = useSelector(userCreated);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const userToRegister = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    dispatch(createUserAsync(userToRegister));
  };
  useEffect(() => {
    if (created) {
      navigate("/");
    }
  }, [created]);

  return (
    <div>
      <h1 className="mt-3 m-auto ">Register</h1>
      <Form className="col-4 mt-5 m-auto " onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-2">
          Register
        </Button>
      </Form>
      <Form.Text className="text-muted">
        Do you already have an account? Login <Link to="/">here</Link>
      </Form.Text>
    </div>
  );
};
