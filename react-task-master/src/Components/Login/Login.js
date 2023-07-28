import React, { useEffect, useState } from "react";
import { LoginStyled } from "./LoginStyled";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const [passValidation, setPassValidation] = useState(false);

  const navigate = useNavigate();

  const getUserData = () => {
    showErrors();
    console.log("here");
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then((res) => {
        res.json();
      })
      .catch((error) => {
        console.log("error", error);
        toast.error("Something Went Wrong");
      });
    navigate("/dashboard");
  };

  const showErrors = () => {
    if (email === "") {
      setEmailValidation(true);
    } else setEmailValidation(false);
    if (password === "") {
      setPassValidation(true);
    } else setPassValidation(false);
  };

  const onChangeHandler = (e) => {
    if (e.target.value) {
      showErrors();
    }
  };

  useEffect(() => {}, []);

  return (
    <LoginStyled>
      <div className="container">
        <div className="loginText">Login Form</div>
        <div className="form">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1" className="label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e?.target?.value);
                  onChangeHandler(e);
                }}
              ></input>
              {emailValidation && (
                <div className="requiredField">Please enter your email</div>
              )}
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" className="label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e?.target?.value);
                  onChangeHandler(e);
                }}
              ></input>
              {passValidation && (
                <div className="requiredField">Please enter your password</div>
              )}
            </div>
            <div className="d-flex justify-content-center mt-5">
              <Button className="button" onClick={getUserData}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </LoginStyled>
  );
};

export default Login;
