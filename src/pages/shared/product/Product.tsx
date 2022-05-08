//imported file
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
export type productDataType = {
  _id: string;
  title: string;
  intro: string;
  imgUrl: string;
  rating: number;
  price: number;
};

type Props = {
  productData: productDataType;
};
//Product component
const Product: React.FC<Props> = ({ productData }) => {
  //destructuring props
  const { _id, title, intro, imgUrl, rating, price } = productData;
  return (
    <Grid item xs={8} md={4} sx={{ mx: "auto" }}>
      <Card sx={{ maxWidth: 400, textAlign: "center", height: 530 }}>
        <CardMedia component="img" height="300" image={imgUrl} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            sx={{ height: 50 }}
            variant="body2"
            color="text.secondary"
          >
            {intro?.slice(0, 100)}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            pt={1.5}
          >
            <Typography variant="h6" component="div">
              $ {price}
            </Typography>
            <Rating name="read-only" value={rating} readOnly />
          </Grid>
        </CardContent>
        <CardActions>
          <Box sx={{ mx: "auto" }}>
            {" "}
            <Link to={`/review-order/${_id}`}>
              {" "}
              <Button variant="contained" size="small">
                <ShoppingCartIcon />
                Order Now
              </Button>
            </Link>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
