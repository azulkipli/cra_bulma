import React from "react";
import { Columns, Column, Content } from "bloomer";
import { observer, inject } from "mobx-react";

@inject("gui")
@observer
class About extends React.Component {
  showAlert = type => {
    const { gui } = this.props;
    // openAlert(title = "", message = "", autohide = true, timeout = 5000, type = "info", scrollTo = "", min = 95)
    gui.openAlert(
      "Welcome: " + type + "!",
      "Use react-hot-reload, mobx etc without eject with react-app-rewired",
      true,
      5000,
      type
    );
  };

  render() {
    return (
      <Content>
        <Columns>
          <Column>
            <h1>About</h1>
            <p>This CRA template already support code splitting.</p>
          </Column>
        </Columns>
      </Content>
    );
  }
}

export default About;
