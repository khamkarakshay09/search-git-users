import React from "react";
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

export default App;
