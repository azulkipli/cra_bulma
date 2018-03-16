import React from "react";
import { Columns, Column, Content } from "bloomer";
import { observer, inject } from "mobx-react";

@inject("gui")
@observer
class Home extends React.Component {
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
    console.log("Home props: ", this.props);
    return (
      <Content>
        <Columns>
          <Column>
            <h1>Home</h1>
            <p>Is the component to handle WYSIWYG generated content</p>
          </Column>
        </Columns>
      </Content>
    );
  }
}

export default Home;
