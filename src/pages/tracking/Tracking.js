import React from "react";
// import { useState } from "react";


// import module from "../../../tailwind.config";

class Tracking extends React.Component {
    constructor(props) {
      super(props);
    }
    
    // const [next, setNext] = useState("");
    render() {
      const trackMe = () => {
        console.log("HI");
      }

      return (
        
        <div className="flex flex-col items-center justify-center container align-middle w-full h-screen bg-secondary-light_orange">
          <div class="nav-bar shadow-xl w-full h-14"></div>
          <div className="flex items-center justify-center w-full h-screen">
            <div class="flex flex-col items-center shadow-xl w-[600px] h-[300px] bg-white rounded-md">
              <div className="flex items-center justify-center topic w-full h-[70px] font-bold">
                <p className="topic_p text-3xl">Track your order</p>
              </div>
              <div className="dicp flex justify-center w-full h-[50px] ">
                <p className="text text-sm">Enter your order ID here to track your order</p>
              </div>
              <div className="input_btn flex flex-row items-center justify-center border-2 w-[500px] h-[150px] ">
                <input className="input-area text-sm w-[220px] h-[50px] bg-red-50 rounded-md ml-9 border-slate-300 py-2 pl-3 hover:bg-orange-100 placeholder:italic" placeholder="Order ID" />
                
                <button  className="track bg-orange hover:bg-red-500 w-[100px] h-[50px] rounded ml-4 text-white font-bold" onClick={() => trackMe()}>Track</button>
                
              </div>
            </div>
          </div>
        </div>
        
      );
    }
    
  }
  
  export default Tracking;