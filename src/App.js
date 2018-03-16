import React from "react";
import Navigationbar from "./components/Navigationbar";
import Heropart from "./components/Heropart";
import Footerpart from "./components/Footerpart";
import { Columns, Column, Content, Container, Section } from "bloomer";
import "bulma/css/bulma.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigationbar />
        <Heropart />

        <Section>
          <Container>
            <Content>
              <Columns>
                <Column>
                  <h1>Content</h1>
                  <p>Is the component to handle WYSIWYG generated content</p>
                </Column>
              </Columns>
            </Content>
          </Container>
        </Section>

        <Footerpart />
      </div>
    );
  }
}

export default App;
