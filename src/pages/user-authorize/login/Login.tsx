//imported file
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

//log in component
const Login = () => {
  //auth context
  //destructuring
  const { firebaseContext } = useAuth();
  const { googleSignIn, emailLogin } = firebaseContext;

  //location redirectUrl
  const location = useLocation();
  const history = useHistory();

  //googleSignIn handle
  const handleGoogleLogin = () => {
    googleSignIn(location, history);
  };
  //use hook form
  const { register, handleSubmit } = useForm();

  //use hook form and email SignIn
  const onSubmitData = (inputData: { email: string; password: string }) => {
    const { email, password } = inputData;
    emailLogin(email, password, location, history);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In to stay connected.
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmitData)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register("email", { required: true })}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("password", { required: true })}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>

        <Box>
          <img
            style={{ cursor: "pointer" }}
            className="img-fluid"
            onClick={handleGoogleLogin}
            src="./google-signin.png"
            alt=""
          />
        </Box>
        <br />
        <Grid container justifyContent="center">
          <Grid item sx={{ mb: 10 }}>
            <Link to="/sign-up">
              <Button>Don't have an account? Sign Up</Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Typography color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" to="/">
          Green Watch
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <br />
      <br />
    </Container>
  );
};

export default Login;
