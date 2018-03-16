import React from "react";
import { withRouter } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarDivider,
  NavbarStart,
  NavbarEnd,
  NavbarLink,
  NavbarDropdown,
  Field,
  Control,
  Button,
  Container
} from "bloomer";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";

import bulma from "../images/bulma.png";

class Navigationbar extends React.Component {
  state = {
    isActive: false
  };
  onClickNav = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  goTo = pathname => {
    this.props.history.push(pathname);
  };
  render() {
    console.log("Nav props: ", this.props);
    return (
      <Container>
        <Navbar>
          <NavbarBrand>
            <NavbarItem isHoverable>
              <img src={bulma} alt="LOGO" /> BULMA
            </NavbarItem>
            <NavbarItem isHidden="desktop" href="https://twitter.com/azulkipli" aria-label="twitter">
              <FontAwesomeIcon icon={faTwitter} color="#55acee" />
            </NavbarItem>
            <NavbarItem isHidden="desktop" href="https://github.com/azulkipli/cra_bulma" aria-label="github">
              <FontAwesomeIcon icon={faGithub} />
            </NavbarItem>
            <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
          </NavbarBrand>
          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarStart>
              <NavbarItem isHoverable isActive={this.props.match.isExact} onClick={() => this.goTo("/help")}>
                Help
              </NavbarItem>
              <NavbarItem hasDropdown isHoverable>
                <NavbarLink isActive={this.props.match.isExact}>Dropdown</NavbarLink>
                <NavbarDropdown>
                  <NavbarItem isHoverable onClick={() => this.goTo("/")}>
                    Home
                  </NavbarItem>
                  <NavbarItem isHoverable>Two</NavbarItem>
                  <NavbarDivider />
                  <NavbarItem onClick={() => this.goTo("/help")}>Help</NavbarItem>
                </NavbarDropdown>
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem href="https://github.com/azulkipli/cra_bulma" isHidden="touch" aria-label="github">
                <FontAwesomeIcon icon={faGithub} />
              </NavbarItem>
              <NavbarItem href="https://twitter.com/azulkipli" isHidden="touch" aria-label="twitter">
                <FontAwesomeIcon icon={faTwitter} color="#55acee" />
              </NavbarItem>
              <NavbarItem>
                <Field isGrouped>
                  <Control>
                    <Button
                      id="twitter"
                      aria-label="Tweet"
                      data-social-network="Twitter"
                      data-social-action="tweet"
                      data-social-target="http://bloomer.js.org"
                      target="_blank"
                      href="https://twitter.com/intent/tweet?text=cra_bulma:Create React App use bloomer set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=azulkipli"
                    >
                      <FontAwesomeIcon icon={faTwitter} color="rgb(85, 172, 238)" />
                      <span style={{ marginLeft: "5px" }}>Tweet</span>
                    </Button>
                  </Control>
                </Field>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </Container>
    );
  }
}

export default withRouter(Navigationbar);
