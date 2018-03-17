import React from "react";
import { observer, inject } from "mobx-react";
import { Columns, Column, Content } from "bloomer";

@inject("gui")
@observer
class Help extends React.Component {
  render() {
    return (
      <Content>
        <Columns>
          <Column>
            <h1>Help</h1>
            <p>Place for seeking help</p>
          </Column>
        </Columns>
      </Content>
    );
  }
}

export default Help;
