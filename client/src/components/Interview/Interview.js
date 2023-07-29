import React from "react"
import "./Interview.css"
import QuestionAnswer from "./subcomponents/QuestionAnswer"

const Interview = () => {
    return(
        <div className="interviewContainer">
            <div className="questionsContainer">
                <QuestionAnswer isHighlighted={true}/>
                <QuestionAnswer isHighlighted={false}/>
            </div>
            
        </div>
    )

}

export default Interview