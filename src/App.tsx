//imported file
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./pages/dashboard/dashboard/Dashboard";
import Home from "./pages/home/home/Home";
import NotFound from "./pages/not-found/NotFound";
import ReviewOrder from "./pages/review-order/ReviewOrder";
import Products from "./pages/shared/products/Products";
import Login from "./pages/user-authorize/login/Login";
import PrivateRoute from "./pages/user-authorize/private-route/PrivateRoute";
import SignUp from "./pages/user-authorize/sign-up/SignUp";

function App() {
  return (
    <div className="App">
      s
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/review-order/:orderId">
              <ReviewOrder></ReviewOrder>
            </PrivateRoute>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/sign-up">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
