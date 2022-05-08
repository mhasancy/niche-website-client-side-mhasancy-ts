//imported file
import { Grid, Rating, Typography } from "@mui/material";
import React from "react";
export type reviewDataType = {
  _id: string;
  name?: string;
  intro: string;
  rating: number;
};

type Props = {
  reviewData: reviewDataType;
};
//review component
const Review: React.FC<Props> = ({ reviewData }) => {
  const { name, intro, rating } = reviewData;
  return (
    <Grid sx={{ py: 10 }} item xs={11} sm={11} md={6}>
      <Typography component="h3" variant="h5" mb={2}>
        {name}
      </Typography>
      <Typography mb={2}>{intro}</Typography>
      <Rating name="read-only" value={rating} readOnly />
    </Grid>
  );
};

export default Review;
