import React from "react"
import {

  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";


export const toggleCategories = ({ activeTab }) => {
  if (activeTab === 0) {
    return (
      <div className="projects-grid">
        {/* Project 1 */}
        <Grid>
          <Cell col={6} tablet={12}>
            <Card
              shadow={5}
              style={{ minHeight: "100%", minWidth: "100%", margin: "auto" }}
            >
              <CardTitle
                style={{
                  color: "#292e49",
                  height: "300px",
                  background:
                    "  url(../img/monster.png) no-repeat center / cover ",
                }}
              />
              <CardTitle
                style={{
                  color: "#292e49",
                  marginBottom: "0",
                  paddingBottom: "0",
                }}
              >
                Monster Rolodex
              </CardTitle>
              <CardText>
                A React app which fetches Monster picture, name and email from a REST API endpoint and delivers it in the UI.
              </CardText>
              <CardActions border>
                <Button style={{ backgroundColor: "#013" }} >
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://github.com/Elcomi/monster-rolodex"
                  >
                    Check Repo
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Cell>


        </Grid>
      </div>
    );
  } else if (activeTab === 1) {
    return (
      <div className="projects-grid">
        {/* Project 1 */}
        <Grid>
          <Cell col={6} tablet={12}>
            <Card shadow={5} style={{ minWidth: "100%", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#292e49",
                  height: "400px",
                  background:
                    "url(../img/meals.jpg) no-repeat center / contain",
                }}
              >
                Meals To Go
              </CardTitle>
              <CardText>
                using (Hooks, Context API, AsyncStorage, Animation) & Set up authentication and user accounts using Firebase and Firebase Functions & Google Maps API and adding interactive maps to your projects & Routing with React Navigation & Styled-Components and native styling
              </CardText>
              <CardActions style={{ display: "flex", justifyContent: "space-between" }} border>
                <Button style={{ backgroundColor: "#013" }}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://github.com/Elcomi/meals-to-go"
                  >
                    check Repo
                  </a>
                </Button>
                <Button style={{ backgroundColor: "#013" }}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://drive.google.com/file/d/1MhD9OEp-ModWNouRxFQKX2yDwP_2yJNr/view?usp=sharing"
                  >
                    check Demo
                  </a>
                </Button>
              </CardActions>

            </Card>
          </Cell>
          <Cell col={6} tablet={12}>
            {/* Project 2 */}
            <Card shadow={5} style={{ minWidth: "100%", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#292e49",
                  height: "400px",
                  background:
                    "url(../img/doneWithIt.jpg) no-repeat center / contain",
                }}
              >
                Done With It
              </CardTitle>
              <CardText>
                Work with the core components and APIs & Build layouts with Flexbox & Build reusable components & Build forms with Formik & Implement data validation with Yup & implement native features like image picker & Upload images and show progress bars & Communicate with REST APIs
              </CardText>
              <CardActions style={{ display: "flex", justifyContent: "space-between" }} border>
                <Button style={{ backgroundColor: "#013" }}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://github.com/Elcomi/done-with-it"
                  >
                    check Repo
                  </a>
                </Button>
                <Button style={{ backgroundColor: "#013" }}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    href="https://drive.google.com/file/d/1My4mcawfpk441c26AcYQhCE_1WR26ewQ/view?usp=sharing"
                  >
                    check Demo
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Cell>
          <Cell col={6} tablet={12}>
            {/* Project 3 */}
            <Card shadow={5} style={{ minWidth: "100%", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "white",
                  height: "400px",
                  background:
                    "url(../img/b7r.png) no-repeat center / cover",
                }}
              >
                B7r Store
              </CardTitle>
              <CardText>
                Developed and maintained React Native components UI , screens, and features for this app at B7r Store Company & Collaborated with other developers to implement new features in a way that is consistent with existing codebase conventions using graphql and apollo client
              </CardText>
              <CardActions border>
                <Button style={{ backgroundColor: "#013" }}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    href=" https://play.google.com/store/apps/details?id=org.b7r.store"
                  >
                    check App
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  } else if (activeTab === 2) {
    return (
      <Grid>
        <Cell col={6} tablet={12}>
          <Card shadow={5} style={{ minWidth: "100%", minHeight: "100%", margin: "auto" }}>
            <CardTitle

            >
              node-js-graphql-api
            </CardTitle>
            <CardText>
              node js server using express js and graphql protocol as api
            </CardText>
            <CardActions border>
              <Button style={{ backgroundColor: "#013" }}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://github.com/Elcomi/node-js-graphql-api"
                >
                  check Repo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </Cell>
        <Cell col={6} tablet={12}>
          <Card shadow={5} style={{ minWidth: "100%", height: "100%", margin: "auto" }}>
            <CardTitle

            >
              node-js-restful-api
            </CardTitle>
            <CardText>
              node js server using express js and restful protocol as api
            </CardText>
            <CardActions border>
              <Button style={{ backgroundColor: "#013" }}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                  href=" https://github.com/Elcomi/node-js-restful-api"
                >
                  check Repo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </Cell>
      </Grid>



    )
  }
}
