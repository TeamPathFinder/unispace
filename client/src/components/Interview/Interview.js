import React from "react"
import { useState, useEffect } from "react";
import "./Interview.css"
import QuestionAnswer from "./subcomponents/QuestionAnswer"
import { ReactComponent as Coffee } from '../../assets/coffee.svg';
import { ReactComponent as Paperclip } from '../../assets/paperclip.svg';
import Banner from './subcomponents/Banner';
import InterviewTitle from "./subcomponents/InterviewTitle";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Interview = () => {
    const baseURL = 'http://127.0.0.1:8000'

    const [data, setData] = useState(null);

    const { interviewID } = useParams(); // Access the 'idnumber' from URL parameters

    const getInterviewData = id => {
        axios.get(`${baseURL}/api/contents/interviews/${id}`)
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(reason => console.log(reason.message))
    }

    useEffect(() => {
        setData(tmp)
    })

    const { interviewID } = useParams(); // Access the 'idnumber' from URL parameters

    return (
        !data ? <></> :
            <div className="interviewContainer">
                <Banner
                    title={data.title}
                    category={data.category}
                    date={data.date}
                    image={data.image}
                />
                <div className="questionsContainer">
                    <InterviewTitle
                        title={data.title.replaceAll('/', '')}
                        category={data.category}
                        location="Canada"
                        views="219"
                    />
                    <QuestionAnswer
                        question={data.interview.one_line_intro}
                        answer={data.interview.more_intro}
                        image={null}
                        isHighlighted={true} />
                    {data.interview.qnas.map(item => (
                        <QuestionAnswer key={item.question} question={item.question} answer={item.answer} isHighlighted={false} image={item.image} />
                    ))}
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
    );
}

export default Interview