import React from "react";
import Navigationbar from "./components/Navigationbar";

import "bulma/css/bulma.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigationbar />
      </div>
    );
  }
}

export default App;
