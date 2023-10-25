import { useState } from "react";
import "./index.css";

import IconFacebook from "../../images/login/icon-facebook.png";
import IconMail from "../../images/login/icon-mail.png";
import IconPhone from "../../images/login/icon-phone.png";
import { SignIn } from "../../Api/login";
import { useDispatch } from "react-redux";
import { SnackbarActions } from "../../redux/snackbar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [Inusername, setInUsername] = useState("");
  const [Inpassword, setInPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cfpassword, setCfpassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLoginForm(true);
  };

  const handleSignupClick = () => {
    setIsLoginForm(false);
  };

  const handleSignIn = async () => {
    try {
      let result = await SignIn({
        username: Inusername,
        password: Inpassword,
      });
      Cookies.set("modish", result.accessToken, {
        expires: 1,
        secure: true,
        sameSite: "strict",
        path: "/",
      });
      dispatch(
        SnackbarActions.OnSnackbar({
          mode: true,
          content: "Login success",
          type: "success",
        })
      );
      setTimeout(() => {
        navigate("../home");
      }, 1000);
    } catch (error) {
      dispatch(
        SnackbarActions.OnSnackbar({ mode: true, content: error, type: "info" })
      );
    }
  };

  const handleSignUp = async () => {
    try {
      // const result = await createUsers({
      //   username: username,
      //   password: password,
      //   email: email,
      //   fullname: fullname,
      //   cfpassword: cfpassword,
      //   isAdmin: false,
      //   status: true,
      // });
      dispatch(
        SnackbarActions.OnSnackbar({
          mode: true,
          content: "Create Account success",
          type: "success",
        })
      );
      setTimeout(() => {
        setIsLoginForm(true);
      }, 500);
    } catch (error) {
      dispatch(
        SnackbarActions.OnSnackbar({ mode: true, content: error, type: "info" })
      );
    }
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLoginForm ? "login" : ""}`}>Login Form</div>
        <div className={`title ${!isLoginForm ? "signup" : ""}`}>
          Signup Form
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLoginForm}
            onChange={handleLoginClick}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLoginForm}
            onChange={handleSignupClick}
          />
          <label htmlFor="login" className={`slide login`}>
            Login
          </label>
          <label htmlFor="signup" className={`slide signup`}>
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>

        <div>
          <div className="form-extension">
            <div>
              <img src={IconFacebook} alt="" />
            </div>
            <div>
              <img src={IconMail} alt="" />
            </div>
            <div>
              <img src={IconPhone} alt="" />
            </div>
          </div>
          <div className="note-extension">
            <hr />
            <p>Sign In with</p>
          </div>
        </div>

        <div className="form-inner">
          {isLoginForm ? (
            <form action="#" className="login">
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Or Username"
                  value={Inusername}
                  onChange={(e) => setInUsername(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  value={Inpassword}
                  onChange={(e) => setInPassword(e.target.value)}
                  required
                />
              </div>
              <div className="pass-link">
                <a href="##">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" onClick={handleSignIn} />
              </div>
              <div className="signup-link">
                Not a member? <a href="##">Signup now</a>
              </div>
            </form>
          ) : (
            <form action="#" className="signup">
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={cfpassword}
                  onChange={(e) => setCfpassword(e.target.value)}
                  required
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" onClick={handleSignUp} />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
