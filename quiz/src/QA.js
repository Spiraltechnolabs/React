import React from "react";
import { myBasket } from ".";
import { QuestionBasket } from "./Question";


//export const myQuestionBasket = React.createContext();
var currentQuestion;
var questions;
function QA(Question) {
  
  debugger;
  const { SetQuestion } = React.useContext(QuestionBasket);
  const { setStatus,RightAnswers,setRightAnswer } = React.useContext(myBasket);

  questions = Question.data;
  let number = parseInt(Question.number) + 1;
  currentQuestion = Question.number;
  let total = Question.total;

  

  function GoToStart() {
    debugger;
    setRightAnswer("0");
    setStatus("start");
  }

  function next(CurrentQuestion) {
    debugger;
    let nextQ = parseInt(CurrentQuestion.target.getAttribute("number")) + 1;
    SetQuestion(nextQ);
  }

  function previous(CurrentQuestion) {
    debugger;
    let pre = parseInt(CurrentQuestion.target.getAttribute("number")) - 1;
    SetQuestion(pre);
  }

  function submit(CurrentQuestion) {
    debugger;
    console.log(RightAnswers);
    setStatus("score");
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-10 col-lg-10">
            <div className="border">
              <div className="question bg-white p-3 border-bottom">
                <div className="d-flex flex-row justify-content-between align-items-center mcq">
                  <h4>MCQ Quiz</h4>
                  <span>
                    ({number} of {total})
                  </span>
                  <button className="btn btn-info" onClick={GoToStart}>
                    Quit 
                  </button>
                </div>
              </div>
              <div className="question bg-white p-3 border-bottom">
                <div className="d-flex flex-row align-items-center question-title">
                  <h3 className="text-danger">Q.</h3>
                  <h5 className="mt-1 ml-2">{questions.question}</h5>
                </div>
                <Answers data={questions} />
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                {currentQuestion != "0" ? (
                  <button
                    className="btn btn-primary d-flex align-items-center btn-danger"
                    type="button"
                    onClick={previous}
                    number={currentQuestion}
                  >
                    <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous
                  </button>
                ) : (
                  <div> </div>
                )}

                {currentQuestion != total - 1 ? (
                  <button
                    total={total}
                    className="btn btn-primary border-success align-items-center btn-danger"
                    type="button"
                    onClick={next}
                    number={currentQuestion}
                  >
                    Next<i className="fa fa-angle-right ml-2"></i>
                  </button>
                ) : (
                  <button
                    total={total}
                    className="btn border-success align-items-center btn-success"
                    type="button"
                    onClick={submit}
                    number={currentQuestion}
                  >
                    Submit<i className="fa fa-angle-right ml-2"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Answers(option) {

  const {setStatus,RightAnswers,setRightAnswer } = React.useContext(myBasket);

  function setanswer(data) {
    debugger;
    
    const trueAnswer = questions.Answer;
    let yourAnswer = data.target.getAttribute("answer");

    if (trueAnswer == yourAnswer) {  
      setRightAnswer(parseInt(RightAnswers) + 1);
    }     
    
  }

  option = option.data;
  return (
    <div>
      <div className="ans ml-2">
        <label className="radio">
          <input
            type="radio"
            name="answer"
            answer="A"
            onChange={setanswer}
            value={option.A}
          />
          <span>{option.A}</span>
        </label>
      </div>
      <div className="ans ml-2">
        <label className="radio">
          <input
            type="radio"
            name="answer"
            answer="B"
            onChange={setanswer}
            value={option.B}
          />
          <span>{option.B}</span>
        </label>
      </div>
      <div className="ans ml-2">
        <label className="radio">
          <input
            type="radio"
            name="answer"
            answer="C"
            onChange={setanswer}
            value={option.C}
          />
          <span>{option.C}</span>
        </label>
      </div>
      <div className="ans ml-2">
        <label className="radio">
          <input
            type="radio"
            name="answer"
            answer="D"
            onChange={setanswer}
            value={option.D}
          />
          <span>{option.D}</span>
        </label>
      </div>
    </div>
  );
}

export default QA;
