import React from "react";
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
  Button
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
  render() {
    return (
      <Navbar style={{ border: "solid 1px #00D1B2", margin: "0" }}>
        <NavbarBrand>
          <NavbarItem>
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
            <NavbarItem href="#">Home</NavbarItem>
            <NavbarItem hasDropdown isHoverable>
              <NavbarLink href="#documentation">Dropdown</NavbarLink>
              <NavbarDropdown>
                <NavbarItem href="#">One</NavbarItem>
                <NavbarItem href="#">Two</NavbarItem>
                <NavbarDivider />
                <NavbarItem href="#">Separated</NavbarItem>
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
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://bloomer.js.org"
                    target="_blank"
                    rel="noopener"
                    href="https://twitter.com/intent/tweet?text=bloomer:
                            a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark"
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
    );
  }
}

export default Navigationbar;
