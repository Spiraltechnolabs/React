import React from "react";
import { myBasket } from ".";

function Score() {
  
  const { setStatus, RightAnswers, setRightAnswer,TotalQuestion } =
    React.useContext(myBasket);

    function QuizTwo()
    {
      setStatus("quiz2");
    }

  return (
    <div>
      <div style={{ padding: "15px" }} className="row">
        <div className="row">
          <div className="col-md-6">
            {RightAnswers == 0 ? (
              <div>
                <h1 style={{"color":"red"}}>You have given all the answers incorrect.</h1>
                <div className="col-md-6" style={{ display: "grid" }}></div>
                <Result />
              </div>
            ) : RightAnswers == TotalQuestion ? (
              <div>
                <h1 style={{ color: "green" }}>
                  {" "}
                  Congrets! You Got Full Marks({RightAnswers}/{TotalQuestion}).
                </h1>
                <button
                  className="btn btn-info"
                  style={{
                    fontSize: "25px",
                    color: "White",
                  }}
                  onClick={QuizTwo}
                >
                  Next Quiz.
                </button>
              </div>
            ) : (
              <div>
                <h1>You Got {RightAnswers} answers correct.!!</h1>
                <h1>Want to take quiz again.?</h1>
                <Result />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Result() {
  const { setStatus, RightAnswers, setRightAnswer } =
    React.useContext(myBasket);

  function GoToHome() {
    debugger;
    setRightAnswer("0");
    console.log(RightAnswers);
    setStatus("question");
  }

  return (
    <button
      className="btn btn-info"
      style={{
        fontSize: "25px",
        color: "White",
      }}
      onClick={GoToHome}
    >
      Take Quiz Again.
    </button>
  );
}

function Home() {
  const { setStatus, RightAnswers, setRightAnswer } =
    React.useContext(myBasket);

  function GoToHome() {
    debugger;
    setRightAnswer("0");
    console.log(RightAnswers);
    setStatus("question");
  }

  return (
    <button
      className="btn btn-info"
      style={{
        fontSize: "25px",
        color: "White",
      }}
      onClick={GoToHome}
    >
      Take Quiz Again.
    </button>
  );
}

export default Score;
