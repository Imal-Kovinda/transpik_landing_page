import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import SamplePage from "./pages/SamplePage";
import Tracking from "./pages/tracking/Tracking";
import OrderStatus from "./pages/tracking/OrderStatus";
import Map from "./pages/tracking/Map";
import PortalsOrders from "./pages/tracking/PortalsOrders";
import Download from "./pages/delivery/Download";
// import MyRoutes from "./pages/tracking/MyRoutes";
import Portals from "./pages/tracking/Portals";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      {/* <Tracking /> */}
      {/* <OrderStatus /> */}
      {/* <Map /> */}
      {/* <PortalsOrders /> */}
      {/* <MyRoutes /> */}
      {/* <Portals /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Tracking" element={<Tracking />}></Route>
          <Route path="/OrderStatus" element={<OrderStatus />}></Route>
          <Route path="/Map" element={<Map />}></Route>
          <Route path="/PortalsOrders" element={<PortalsOrders />}></Route>
          <Route path="/Portals" element={<Portals />}></Route>
          <Route path="/Download" element={<Download />}></Route>
          

        </Routes>
      </BrowserRouter>
    </div>);
  }
}

export default App;