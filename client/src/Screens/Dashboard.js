import React, { useEffect } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

const Dashboard = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo || !userInfo.name) {
      history.push("/login");
    }
  }, [userInfo, history]);

  const logoutHandler = () => {
    history.push("/login");
    dispatch(logout());
  };

  return (
    <Box mt={5} display="flex" flexDirection="column">
      <Typography variant="h4" color="secondary" style={{ marginBottom: 20 }}>
        {userInfo && `Wecome to Auth App, ${userInfo.name}`}
      </Typography>
      <Typography style={{ marginBottom: 20 }}>
        {"Thanku for registering with us."}
      </Typography>
      <Grid container>
        <Grid item md={4} xs={12}></Grid>
        <Grid item xs={12} component={Box} display="flex" flexDirection="row">
          <Button
            variant="contained"
            style={{ marginRight: 8 }}
            color="secondary"
            onClick={logoutHandler}
          >
            {"Logout"}
          </Button>
          <Button variant="contained" color="secondary">
            {"Delete Account"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
