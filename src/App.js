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
    const { location } = this.props;
    return (
      <div className="app">
        <Navigationbar {...this.props} />
        {location.pathname === "/" ? <Heropart isColor="primary" isSize="small" title="Welcome" /> : ""}
        {location.pathname === "/about" ? <Heropart isColor="dark" isSize="small" title="About Us" /> : ""}
        {location.pathname === "/help" ? <Heropart isColor="info" isSize="small" title="Help" /> : ""}
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
