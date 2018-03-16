import React from "react";
import { Footer, Container, Columns, Content, Column } from "bloomer";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faHeart from "@fortawesome/fontawesome-free-solid/faHeart";

class Footerpart extends React.Component {
  state = {
    isActive: false
  };
  onClickNav = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <Footer id="footer">
        <Container>
          <Content>
            <Columns>
              <Column>
                <p>
                  Made with <FontAwesomeIcon icon={faHeart} /> by <a>Azul</a>
                </p>
              </Column>
            </Columns>
            <Content isSize="small">
              <p>
                The source code is licensed under <a target="_blank">MIT</a>.
              </p>
              <p>
                The website content is licensed under <a target="_blank">CC ANS 4.0</a>.
              </p>
            </Content>
          </Content>
        </Container>
      </Footer>
    );
  }
}

export default Footerpart;
