//imported file
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Reviews from "../reviews/Reviews";

//home component
const Home = () => {
  //destructuring
  const { dataContext } = useAuth();
  const { productsData } = dataContext;
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <br />
      <br />
      <Container>
        <Typography variant="h2" gutterBottom component="div">
          Featured Watches For You
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          Today is the last day. Up to 30% off!
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {productsData
              .slice(0, 6)
              .map(
                ({
                  _id,
                  title,
                  intro,
                  imgUrl,
                  rating,
                  price,
                }: {
                  _id: string;
                  title: string;
                  intro: string;
                  imgUrl: string;
                  rating: number;
                  price: number;
                }) => {
                  return (
                    <Grid key={_id} item xs={8} md={4} sx={{ mx: "auto" }}>
                      <Card
                        sx={{ maxWidth: 400, textAlign: "center", height: 530 }}
                      >
                        <CardMedia
                          component="img"
                          height="300"
                          image={imgUrl}
                          alt=""
                        />
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
                }
              )}
          </Grid>
        </Box>
      </Container>

      <Blogs></Blogs>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
