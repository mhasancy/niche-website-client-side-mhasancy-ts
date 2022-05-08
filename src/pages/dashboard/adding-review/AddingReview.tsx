//imported file
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

//reviews adding component
const AddingReview = () => {
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const { register, reset, handleSubmit } = useForm();

  //use hook form and email SignIn with context
  const onSubmitData = (inputData) => {
    const { name, email, intro, rating } = inputData;
    axios
      .post("https://quiet-cliffs-65550.herokuapp.com/reviews", {
        name: name,
        email: email,
        intro: intro,
        rating: parseInt(rating),
      })
      .then((response) => {
        if (response?.data.acknowledged) {
          alert("Review added successfully.");
          reset();
        }
      })
      .catch((error) => {
        alert(error);
      });
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
        <Typography component="h1" variant="h4">
          Add a Review
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
                {...register("name", { required: true })}
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                defaultValue={user?.displayName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                xs={12}
                {...register("email", { required: true })}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                defaultValue={user?.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("intro", { required: true })}
                required
                fullWidth
                id="intro"
                label="Description"
                name="intro"
                multiline
                rows={2}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                {...register("rating", { required: true })}
                required
                fullWidth
                name="rating"
                label="Review Score out of 5"
                type="number"
                id="rating"
                InputProps={{ inputProps: { min: 0, max: 5 } }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddingReview;
