import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer";
import "./App.css";
import "./assets/css/bootstrap.min.css";
import "./assets/scss/index.scss";
import Navbar from "./components/Navbar";

const DisplayPath = ({ path }) => <p className="display-path">You are visiting {path}</p>;

const routes = [
  {
    id: 1,
    path: "/",
    component: <HomePage />,
    exact: true
  },
  // {
  //   id: 2,
  //   path: "/our-services",
  //   component: <DisplayPath path="/our-solutions" />
  // },
  // {
  //   id: 3,
  //   path: "/about-us",
  //   component: <DisplayPath path="/about-us" />
  // },
  // {
  //   id: 4,
  //   path: "/contact-us",
  //   component: <DisplayPath path="/contact-us" />
  // }
];

function App() {
  return (
    <div className="app-container">
      <div className="header-wrapper">
        <Navbar />
      </div>
      <Switch>
        {routes.map(item => (
          <Route key={item.id} path={item.path} exact={item.exact}>
            {item.component}
          </Route>
        ))}
      </Switch>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
