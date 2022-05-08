//imported file
import { CircularProgress } from "@mui/material";
import React, { ReactNode } from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

//private route
const PrivateRoute = ({
  children,
  ...rest
}: {
  children: ReactNode;
  exact?: true;
  path: string;
}) => {
  const { firebaseContext } = useAuth();

  //destructuring
  const { user, isLoading } = firebaseContext;
  //isLoading condition
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
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

export default PrivateRoute;
