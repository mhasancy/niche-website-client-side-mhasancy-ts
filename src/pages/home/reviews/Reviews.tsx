//imported file
// import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Review from "../review/Review";
//reviews component
const Reviews = () => {
  //destructuring
  const { dataContext } = useAuth();
  const { reviewsData } = dataContext;

  return (
    <Container>
      <Typography variant="h2" gutterBottom component="div">
        What people say.
      </Typography>
      <Grid sx={{ textAlign: "center" }} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Box>
          {reviewsData?.map(
            (reviewData: { _id: string; intro: string; rating: number }) => (
              <Review key={reviewData?._id} reviewData={reviewData}></Review>
            )
          )}
        </Box>
      </Grid>
    </Container>
  );
};

export default Reviews;
