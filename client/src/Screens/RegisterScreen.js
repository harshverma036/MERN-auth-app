import React from "react";
import { Grid, Box, Button, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
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
          <Box component="form" mt={2}>
            <TextField
              variant="outlined"
              label="Name"
              placeholder="Enter Name.."
              color="secondary"
              type="text"
              margin="normal"
              required
              fullWidth
            />

            <TextField
              variant="outlined"
              label="Email"
              placeholder="Enter Email.."
              color="secondary"
              type="email"
              margin="normal"
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
              required
              fullWidth
            />

            <TextField
              variant="outlined"
              label="Confirm Password"
              placeholder="Enter Confirm Password.."
              color="secondary"
              type="password"
              margin="normal"
              required
              fullWidth
            />

            <Button
              variant="contained"
              color="secondary"
              fullWidth
              style={{ marginTop: 16, marginBottom: 10 }}
            >
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
