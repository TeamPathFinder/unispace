import React from "react"
import "./Interview.css"
import QuestionAnswer from "./subcomponents/QuestionAnswer"
import { ReactComponent as Coffee } from '../../assets/coffee.svg';
import { ReactComponent as Paperclip } from '../../assets/paperclip.svg';



const Interview = () => {
    return (
        <div className="interviewContainer">
            <div className="questionsContainer">
                <QuestionAnswer isHighlighted={true} />
                <QuestionAnswer isHighlighted={false} />
                <div className="flex bottomButtons">
                    <div className="blueButton">
                        <div style={{ margin: 0, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <Coffee style={{ height: '16px', display: 'flex', marginRight: '1vw' }}></Coffee>
                            <a> 커피챗 요청하기 </a>
                        </div>
                    </div>

                    <div className="blueButton">
                        <div style={{ margin: 0, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <Paperclip style={{ width: '20px', display: 'flex', marginRight: '1vw' }}></Paperclip>
                            <a> 공유하기 </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Interview