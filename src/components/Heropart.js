import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Hero,
  HeroBody,
  Container,
  // HeroFooter,
  // Tab,
  // Tabs,
  // TabList,
  // TabLink,
  Columns
} from "bloomer";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faHome from "@fortawesome/fontawesome-free-solid/faHome";

class Heropart extends React.Component {
  state = {
    isActive: false
  };
  onClickNav = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <Hero {...this.props}>
        <HeroBody>
          <Container>
            <Columns>
              <Breadcrumb>
                <ul>
                  <BreadcrumbItem>
                    <Link to="/">
                      <FontAwesomeIcon icon={faHome} />
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a>{this.props.title}</a>
                  </BreadcrumbItem>
                </ul>
              </Breadcrumb>
            </Columns>
          </Container>
        </HeroBody>
        {/* 
        <HeroFooter>
          <Tabs isBoxed isFullWidth>
            <Container>
              <TabList>
                <Tab isActive>
                  <TabLink>Overview</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Grid</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Element</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Components</TabLink>
                </Tab>
                <Tab>
                  <TabLink>Layout</TabLink>
                </Tab>
              </TabList>
            </Container>
          </Tabs>
        </HeroFooter> 
        */}
      </Hero>
    );
  }
}

export default Heropart;
