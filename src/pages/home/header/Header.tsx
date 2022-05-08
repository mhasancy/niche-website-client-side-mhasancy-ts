//imported file
import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
//header component
const Header = () => {
  const { firebaseContext } = useAuth();
  //destructuring
  const { user, logOut } = firebaseContext;

  return (
    <AppBar className=" sticky-top navbar navbar-expand-lg shadow navbar-white fw-bold">
      <Box className="container">
        <NavLink className="navbar-brand fs-1 fw-bold" to="/">
          <span style={{ fontFamily: "Merienda" }}>Green Watch</span>
        </NavLink>
        <button
          className="navbar-toggler navbar-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Box className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                aria-current="page"
                className="nav-link active"
                to="/products"
              >
                Products
              </NavLink>
            </li>

            {user?.email ? (
              <>
                <li className="nav-item">
                  <NavLink
                    aria-current="page"
                    className="nav-link active"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="" className="nav-link">
                    {user?.displayName}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" onClick={logOut}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signup" className="nav-link">
                    Signup
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
