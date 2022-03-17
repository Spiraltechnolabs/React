import React from "react";
import { myBasket } from ".";

function Quiz_2() {
 
  const { setStatus, RightAnswers, setRightAnswer } = React.useContext(myBasket);
  function home()
  {
    setRightAnswer("0");
    setStatus("start");
  }
  return (
    <div>
      <h1>Next Quiz is comming soon. Thanks for participate.</h1>
      <h2 style={{color:"green"}}>Want to Take previous Quiz Again.?</h2>
      <button
        className="btn btn-info"
        style={{
          fontSize: "25px",
          color: "White",
        }}
        onClick={home}>
        Take Quiz Again
      </button>
    </div>
  );
}

export default Quiz_2;
