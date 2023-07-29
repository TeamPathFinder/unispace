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
                <a> 재민 님은 어떤 사람인가요? </a>
            </div>

            <div className="questionAnswer">
                <a>안녕하세요, 저는 유니스페이스의 Founder이자 현재는 PM으로서 제품화를 기획하며 팀원들 각자의 노력이 성공적인 결과물로 이어질 수 있도록 노력하고 있어요. 평소에 문제를 발견하면 해결하고 싶다고 생각하고, 일단 바로 추진해 보는 편이에요. 제 머릿속에만 있던 것이 함께하는 사람들에게도 전달이 되고, 같이 만들어 내 직접 눈으로 보일 때 정말 설렙니다. 제가 모르는 사람들한테까지도 저희 제품이 가치를 제공해 줄 수 있도록 열심히 일하고 있죠.</a>
            </div>
        </div>
    );
}

export default QuestionAnswer