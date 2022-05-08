//imported file
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import useAuth from "../../../hooks/useAuth";
//dashboard home component
const DashboardHome = () => {
  const { dataContext, firebaseContext } = useAuth();
  const { productsData, ordersData, reviewsData } = dataContext;
  const { admin, user, usersData } = firebaseContext;

  //matched orders
  const myOrderedItems = ordersData?.filter(
    (myOrderedItem) => myOrderedItem.email === user.email
  );
  // matched reviews data
  const myReviews = reviewsData?.filter(
    (myReview) => myReview.email === user.email
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {user?.email && admin ? (
          <Grid xs={8} md={12} sx={{ mx: "auto" }}>
            <br />
            <br />
            <br />
            <br />
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 10 }}
            >
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                item
                xs={8}
                md={5}
                sx={{ mx: "auto" }}
              >
                <Paper sx={{ p: 10 }}>
                  Total Products: {productsData.length}
                </Paper>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                item
                xs={8}
                md={5}
                sx={{ mx: "auto" }}
              >
                <Paper sx={{ p: 10 }}>Total Orders : {ordersData.length}</Paper>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                item
                xs={8}
                md={5}
                sx={{ mx: "auto" }}
              >
                <Paper sx={{ p: 10 }}>
                  Total Reviews : {reviewsData.length}
                </Paper>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                item
                xs={8}
                md={5}
                sx={{ mx: "auto" }}
              >
                <Paper sx={{ p: 10 }}>Total Users : {usersData.length}</Paper>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid xs={8} md={12} sx={{ mx: "auto" }}>
            <br />
            <br />
            <br />
            <br />
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 10 }}
            >
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                item
                xs={8}
                md={5}
                sx={{ mx: "auto" }}
              >
                <Paper sx={{ p: 10 }}>
                  My Orders: {myOrderedItems?.length}
                </Paper>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                item
                xs={8}
                md={5}
                sx={{ mx: "auto" }}
              >
                <Paper sx={{ p: 10 }}>My Reviews : {myReviews?.length}</Paper>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default DashboardHome;
