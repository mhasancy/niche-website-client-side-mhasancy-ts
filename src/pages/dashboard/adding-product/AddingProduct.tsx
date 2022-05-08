//imported file
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

//adding product services component
const AddingProduct = () => {
  //destructuring use_form
  const { register, reset, handleSubmit } = useForm();

  //use hook form
  const onSubmitData = (inputData) => {
    const { title, intro, imgUrl, price } = inputData;
    axios
      .post("https://quiet-cliffs-65550.herokuapp.com/products", {
        title: title,
        intro: intro,
        imgUrl: imgUrl,
        price: price,
      })
      .then((response) => {
        if (response?.data.acknowledged) {
          alert("Product added successfully.");
          reset();
        }
      })
      .catch((error) => {
        alert("Product not added, please try again.");
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
        <Typography component="h1" variant="h3">
          Add Products
        </Typography>{" "}
        <br />
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmitData)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register("title", { required: true })}
                autoComplete="given-name"
                name="title"
                required
                fullWidth
                id="name"
                label="Title"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                {...register("intro", { required: true })}
                required
                fullWidth
                id="intro"
                label="Short Description"
                name="intro"
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("imgUrl", { required: true })}
                required
                fullWidth
                name="imgUrl"
                label="Image Url"
                type="url"
                id="imgUrl"
                autoComplete="url"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("price", { required: true })}
                required
                fullWidth
                name="price"
                label="Price"
                type="number"
                id="price"
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

export default AddingProduct;
