import React from 'react'
import ReactDom from "react-dom";
import {myBasket} from "."
import QA from './QA';
import Start from './Start';

export const QuestionBasket = React.createContext();

function Question() {
    const { TotalQuestion,setTotalQuestion} = React.useContext(myBasket);
    const [questionNumber,SetQuestion] = React.useState("0");
  
    const Questions = [
        {
            question : "Which of the following country has largest population?",
            A:"Canada",
            B:"India",
            C:"USA",
            D:"Brazil",
            Answer : "B"
        },
        {
            question : "(a + b) ^ 2",
            A:"a^2 + b^2 + 2a",
            B:"a^2 + 2ab^2 + b^2",
            C:"a^2 + 2ab + b^2",
            D:"a + b + 2ab",
            Answer : "C"
        },
        {
            question : "First alphabet.?",
            A:"A",
            B:"I",
            C:"U",
            D:"B",
            Answer : "A"
        }
        ,
        {
            question : "10 + 10",
            A:"30",
            B:"20",
            C:"30",
            D:"non of above",
            Answer : "B"
        }
    ]
    debugger;
    setTotalQuestion(Questions.length);
   

  return (
        <div>
            <QuestionBasket.Provider value={{ SetQuestion : SetQuestion}}>
                <QA  data={Questions[questionNumber]} number={questionNumber} total={Questions.length}/>
            </QuestionBasket.Provider>
        </div>
  )
}

export default Question