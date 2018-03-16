import React from "react";
import { withRouter } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import Navigationbar from "./components/Navigationbar";
import Heropart from "./components/Heropart";
import Footerpart from "./components/Footerpart";
import { Container, Section } from "bloomer";
import "bulma/css/bulma.css";
import "./global.css";

class App extends React.Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="app">
        <Navigationbar />
        <Heropart />

        <Section>
          <Container>
            <MainRoute />
          </Container>
        </Section>

        <Footerpart />
      </div>
    );
  }
}

export default withRouter(App);
