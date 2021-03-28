import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";

const Dashboard = () => {
  return (
    <Box mt={5} display="flex" flexDirection="column">
      <Typography
        variant="h4"
        color="secondary"
        style={{ marginBottom: 20 }}
      >{`Wecome to Auth App, USER NAME`}</Typography>
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
