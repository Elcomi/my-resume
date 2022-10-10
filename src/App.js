import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/"
            >
              El Comi
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/portfolio/resume">Resume</Link>
            <Link to="/portfolio/projects">Projects</Link>
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link
              style={{ textDecoration: "none", fontSize: "bold", color: "black" }}
              to="/"
            >
              El Comi
            </Link>
          }
        >
          <Navigation>
            <Link to="/portfolio/resume">Resume</Link>
            <Link to="/portfolio/projects">Projects</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  )
}


export default App;
