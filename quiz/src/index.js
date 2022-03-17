import ReactDOM from "react-dom";
import Score from "./Score";
import Question from "./Question";
import React from "react";
import Start from "./Start";
import Quiz_2 from "./Quiz_2";

export const myBasket = React.createContext();

function App() {

  const [state,setStatus] = React.useState("start");  

  //To show Score 
  const [RightAnswers,setRightAnswer] = React.useState("0"); 

  //To show how many answer is right out of how many (Eg. 4/4)
  const [TotalQuestion,setTotalQuestion] = React.useState("0");  

  return (
    <div className="row">      

      <myBasket.Provider value={{ setStatus : setStatus,RightAnswers:RightAnswers,setRightAnswer:setRightAnswer,TotalQuestion:TotalQuestion,setTotalQuestion:setTotalQuestion}}> 
          {state == "start" && <Start />}
          {state == "question" && <Question />}
          {state == "score" && <Score />}
          {state == "quiz2" && <Quiz_2 />}      
      </myBasket.Provider>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
