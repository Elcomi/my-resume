import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="demo-big-content">
      <Layout fixedHeader>
        <Header
          className="header-color"

          scroll
        >
          <Navigation>
            <Link to="/portfolio/resume">Resume</Link>
            <Link to="/portfolio/projects">Projects</Link>
          </Navigation>
        </Header>

        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  )
}


export default App;
