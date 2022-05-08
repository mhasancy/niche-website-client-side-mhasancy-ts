//imported file
import CommentIcon from "@mui/icons-material/Comment";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Card, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
//Blog component
const Blog = ({ blogData }) => {
  //destructuring props
  const { title, date, imgUrl, comments } = blogData;
  return (
    <div className="col container" style={{ width: "20rem" }}>
      <Card className="card border-card h-100 radius-card overflow-hidden">
        <img
          src={imgUrl}
          style={{ height: "250px" }}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <Link to="/" className="text-decoration-none">
            <h5
              style={{ height: "150px" }}
              className="card-title pb-3 text-dark"
            >
              {title}
            </h5>
          </Link>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            item
            className="mb-3"
          >
            <span>
              <DateRangeIcon fontSize="small" /> {date}
            </span>
            <span>
              <CommentIcon fontSize="small" /> {comments}
            </span>
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default Blog;
