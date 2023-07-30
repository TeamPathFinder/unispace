import React from "react"
import "../Interview.css"
import UnispaceCircle from "../../../assets/UnispaceCircle.png";

/**
 * This is a question-answer dialogue box of the interview page.
 * @param {string} question - question
 * @param {string} answer - answer 
 * @param {string} image - image of dialogue box
 * @param {boolean} isHighlighted - whether it is introduction (green)
 */

const QuestionAnswer = ({ question, answer, image, isHighlighted }) => {
    return (
        <div className={isHighlighted ? 'questionDialogue highlighted' : 'questionDialogue'}>
            <div className="flex questionTitle">
                <img className="authorImg"
                    style={isHighlighted ? { 'display': 'none' } : { 'display': 'flex', 'marginRight': '2%' }}
                    src={UnispaceCircle}
                    alt="Q." />
                <a> {question} </a>
            </div>

            <div className="questionAnswer">
                <a>{answer}</a>
            </div>
        </div>
    );
}

export default QuestionAnswer