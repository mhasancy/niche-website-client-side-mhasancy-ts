//imported file
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../home/header/Header";

//404 component
const NotFound = () => {
  return (
    <Box>
      <Header></Header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Box>
          <Typography
            variant="h1"
            component="div"
            style={{ fontSize: "200px" }}
          >
            404
          </Typography>
          <Typography variant="h1" component="div" style={{ fontSize: "50px" }}>
            Oops! The requested page is not available.
          </Typography>

          <br />
          <NavLink to="/">
            <Button variant="contained">Go to Homepage</Button>
          </NavLink>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
