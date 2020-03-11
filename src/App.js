import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import "./App.css";
import Footer from "./components/footer";

const DisplayPath = ({ path }) => <p className="display-path">You are visiting {path}</p>;

const routes = [
  {
    id: 1,
    path: "/",
    component: <HomePage />,
    exact: true
  },
  {
    id: 2,
    path: "/our-solutions",
    component: <DisplayPath path="/our-solutions" />
  },
  {
    id: 3,
    path: "/about-us",
    component: <DisplayPath path="/about-us" />
  },
  {
    id: 4,
    path: "/contact-us",
    component: <DisplayPath path="/contact-us" />
  }
];

function App() {
  return (
    <div className="app-container">
      <div className="header-wrapper">
        <Header />
      </div>
      <Switch>
        {routes.map(item => (
          <Route path={item.path} exact={item.exact}>
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
