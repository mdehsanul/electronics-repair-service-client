import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import AddServices from "./components/Dashboard/Admin/AddServices/AddServices";
import ManageServices from "./components/Dashboard/Admin/ManageServices/ManageServices";
import Book from "./components/Dashboard/User/Book/Book";
import Bookinglist from "./components/Dashboard/User/Bookinglist/Bookinglist";
import OrderList from "./components/Dashboard/Admin/OrderList/OrderList";
import AddAdmin from "./components/Dashboard/Admin/AddAdmin/AddAdmin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import BookingpageWithhoutServiceId from "./components/Dashboard/User/BookpageWithoutServiceId/BookpageWithoutServiceId";
import Review from "./components/Dashboard/User/Review/Review";

// createContext()
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/book/:serviceId">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/book">
            <BookingpageWithhoutServiceId></BookingpageWithhoutServiceId>
          </PrivateRoute>
          <PrivateRoute path="/bookinglist">
            <Bookinglist></Bookinglist>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/orderlist">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/addservice">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/addadmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manageservice">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
