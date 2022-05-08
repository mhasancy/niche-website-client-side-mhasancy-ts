//imported file
import { Typography } from "@mui/material";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Blog from "../Blog/Blog";

//Blogs component
const Blogs = () => {
  //destructuring Blogs data
  const { dataContext } = useAuth();
  const { blogsData } = dataContext;
  return (
    <div className=" container mx-auto my-5">
      <Typography variant="h2" gutterBottom component="div">
        Ten Minutes
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        Read what you love.
      </Typography>
      <br />
      {blogsData?.length <= 0 ? (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
          {blogsData?.map((blogData) => (
            <Blog key={blogData?._id} blogData={blogData}></Blog>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
