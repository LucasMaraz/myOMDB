import React from "react";
import axios from "axios";
import Register from "../views/Register";
import Home from "../views/Home";
import Navbar from "../components/Navbar";
import Login from "../views/Login";
import Favorites from "../views/Favorites";
import Footer from "../components/Footer";
import TableUsers from "../views/TableUsers";
import Search from "../views/Search";
import Movie from "../views/Movie";
import ListUsersFavorites from "../views/ListUsersFavorites";
import "../index.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/user";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    axios
      .get("/api/auth/me")
      .then((info) => info.data)
      .then((user) => {
        dispatch(setUser(user));
      })
      .catch(() => console.log("Sin iniciar sesion"));
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/register">
          {user.id ? <Home /> : <Register />}
        </Route>
        <Route exact path="/login">
          {user.id ? <Home /> : <Login />}
        </Route>
        <Route exact path="/movie/:id">
          <Movie />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/search/:id">
          <Search />
        </Route>
        <Route exact path="/favorites">
          {!user.id ? <Home /> : <Favorites />}
        </Route>
        <Route exact path="/users/:id">
          <ListUsersFavorites />
        </Route>
        <Route exact path="/users">
          <TableUsers />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/404" render={() => <p>404</p>}></Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
