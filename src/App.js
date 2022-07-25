import React from "react";
import SamplePage from "./pages/SamplePage";
import Tracking from "./pages/Tracking";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      
      <Tracking />
    </div>);
  }
}

export default App;