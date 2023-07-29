import React from "react"
import "../Interview.css"
import UnispaceCircle from "../../../assets/UnispaceCircle.png";

const QuestionAnswer = ({ question, answer, isHighlighted }) => {
    return (
        <div className={isHighlighted ? 'questionDialogue highlighted' : 'questionDialogue'}>
            <div className="flex questionTitle">
                <img className="authorImg"
                    style={isHighlighted ? { 'display': 'none' } : { 'display': 'flex', 'marginRight': '2%' }}
                    src={UnispaceCircle}/>
                <a> {question} </a>
            </div>

            <div className="questionAnswer">
                <a>{answer}</a>
            </div>
        </div>
    );
}

export default QuestionAnswer