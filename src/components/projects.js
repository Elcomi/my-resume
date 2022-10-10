import React, { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
} from "react-mdl";

import { toggleCategories } from "./toggleCategories";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setActiveTab({ activeTab: 0 })

  }, []);

  return (
    <div style={{ background: "linear-gradient(to right, #536976, #292e49)", minHeight: "100%", minWidth: "100%", }}>
      <Tabs
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab({ activeTab: tabId })}
        ripple
      >
        <Tab style={{ color: "white" }}>React Native</Tab>
        <Tab style={{ color: "white" }}>React js</Tab>
        <Tab style={{ color: "white" }}>Node js</Tab>
      </Tabs>

      <Grid>
        <Cell col={12}>
          <div className="content">
            {toggleCategories(activeTab)}
          </div>
        </Cell>
      </Grid>
    </div>
  );
}



export default Projects;
