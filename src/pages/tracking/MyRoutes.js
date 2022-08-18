import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";  
import OrderStatus from './OrderStatus';

class MyRoutes extends Component {
    state = {  } 
    render() { 
        return (
        <Router>
          {/* <Routes>
            <nav>
                <Link></Link>
            </nav>
            <Route path="/OrderStatus" element={<OrderStatus />} />
            <Route path="*" element={<error />} />
          </Routes> */}
        </Router>
        );
    }
}
 
export default MyRoutes;
