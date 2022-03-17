import React from "react";
import ReactDom from "react-dom";
import {myBasket} from "."

function Start() {
debugger;
  
  const { setStatus } =  React.useContext(myBasket);

  let padding_15 = {
    padding: "15px",
  };
  
  let text_align_right = {
    "text-align": "right",  
  };

  let divstyle = {
    "display": "grid"
  };

  function GoToQuestion()
  {
     setStatus("question");
  }

  return (
    <div>
      <div style={padding_15} className="row">
        <div className="row">
          <div className="col-md-6">
            <h1>Hello User, Start the Quiz.</h1>
            <div className="col-md-6" style={divstyle}>
              <h2>Good luck!</h2>
              <button
                className="btn btn-info"
                style={{
                  "fontSize": "25px",
                  "color" : "White"
                }}
                onClick={GoToQuestion}>
                Let's Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
