import React from "react";
import { observer, inject } from "mobx-react";

@inject("gui")
@observer
class Loading extends React.Component {
  render() {
    return <div>Loading...</div>;
  }
}

export default Loading;
