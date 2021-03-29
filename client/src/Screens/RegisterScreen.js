import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions";
import { USER_REGISTER_RESET } from "../constants/userConstants";

const RegisterScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, success, registeredUser, error } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Password do not match !");
    } else {
      dispatch(register({ name, email, password }));
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <Grid container justify="center">
      <Grid item lg={5} md={7} xs={12}>
        <Box
          display="flex"
          mt={4}
          flexDirection="column"
          style={{ textAlign: "center" }}
        >
          <Typography variant="h2" color="secondary">
            {"Auth App"}
          </Typography>
          <Typography>{"Enter your credientials to Register"}</Typography>
          {errorMessage && (
            <Typography color="error">{errorMessage}</Typography>
          )}
          {error && <Typography color="error">{error}</Typography>}
          {success && (
            <Typography color="primary">
              {"Account Created Successfully "}
              <Link to="/login" style={{ color: "green" }}>
                {"Login"}
              </Link>
            </Typography>
          )}
          <Box component="form" mt={2} onSubmit={registerSubmitHandler}>
            <TextField
              variant="outlined"
              label="Name"
              placeholder="Enter Name.."
              color="secondary"
              type="text"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              disabled={loading}
            />

            <TextField
              variant="outlined"
              label="Email"
              placeholder="Enter Email.."
              color="secondary"
              type="email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              disabled={loading}
            />

            <TextField
              variant="outlined"
              label="Password"
              placeholder="Enter Password.."
              color="secondary"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              disabled={loading}
            />

            <TextField
              variant="outlined"
              label="Confirm Password"
              placeholder="Enter Confirm Password.."
              color="secondary"
              type="password"
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              fullWidth
              disabled={loading}
            />

            <Button
              variant="contained"
              color="secondary"
              fullWidth
              style={{ marginTop: 16, marginBottom: 10 }}
              type="submit"
              disabled={loading}
            >
              {loading && <CircularProgress size={20} color="inherit" />}
              &nbsp;&nbsp;
              {"Register"}
            </Button>

            <Typography>
              Already registered?{" "}
              <Link style={{ textDecoration: "none" }} to="/login">
                {"Login"}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterScreen;
