import React from "react";
import { Link } from "react-router-dom";
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
import { observer, inject } from "mobx-react";

@inject("gui")
@observer
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
  pageActive = name => {
    const { location } = this.props;

    return name === location.pathname ? "navbar-item is-active" : "navbar-item";
  };

  render() {
    const { location } = this.props;
    console.info("location: ", location);
    return (
      <Container>
        <Navbar>
          <NavbarBrand>
            <Link to="/" className="navbar-item">
              <img src={bulma} alt="LOGO" /> CRA BULMA
            </Link>
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
              <Link to="/about" className={this.pageActive("/about")}>
                About
              </Link>
              <Link to="/help" className={this.pageActive("/help")}>
                Help
              </Link>
              <NavbarItem hasDropdown isHoverable>
                <NavbarLink>Dropdown</NavbarLink>
                <NavbarDropdown>
                  <Link className={this.pageActive()} to="/">
                    Home
                  </Link>
                  <Link className={this.pageActive()} to="/about">
                    About
                  </Link>
                  <NavbarDivider />
                  <Link className={this.pageActive()} to="/help">
                    Help
                  </Link>
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

export default Navigationbar;
