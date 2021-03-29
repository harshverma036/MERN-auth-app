import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    } else {
      history.push("/login");
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
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
          <Typography>{"Enter your credientials to Login"}</Typography>
          <Box component="form" mt={2} onSubmit={submitHandler}>
            {error && <Typography color="error">{error}</Typography>}
            <TextField
              variant="outlined"
              label="Email"
              placeholder="Enter Email.."
              color="secondary"
              type="email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
              fullWidth
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
              disabled={loading}
              required
              fullWidth
            />

            <Button
              variant="contained"
              color="secondary"
              fullWidth
              type="submit"
              style={{ marginTop: 16, marginBottom: 10 }}
              disabled={loading}
            >
              {loading && <CircularProgress size={22} color="inherit" />}
              &nbsp;&nbsp;
              {"Login"}
            </Button>

            <Typography>
              Not yet registered?{" "}
              <Link style={{ textDecoration: "none" }} to="/register">
                {"Register"}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginScreen;
