import React from "react";
import { withRouter } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";
import AppRoutes from "./routes";

const userStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
}));

function App() {
  const classes = userStyles();
  return (
    <Container className={classes.root}>
      <AppRoutes />
    </Container>
  );
}

export default withRouter(App);
