//imported file
import { CircularProgress } from "@mui/material";
import React, { ReactNode } from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

//admin route
const AdminRoute = ({
  children,
  ...rest
}: {
  children: ReactNode;
  exact?: true;
  path: string;
}) => {
  const { firebaseContext } = useAuth();

  //destructuring
  const { user, admin } = firebaseContext;
  //admin condition
  if (!admin) {
    return <CircularProgress />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
