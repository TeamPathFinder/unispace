import React from "react"
import "./Interview.css"
import QuestionAnswer from "./subcomponents/QuestionAnswer"
import { ReactComponent as Coffee } from '../../assets/coffee.svg';
import { ReactComponent as Paperclip } from '../../assets/paperclip.svg';
import Banner from './subcomponents/Banner';
import InterviewTitle from "./subcomponents/InterviewTitle";
import { useParams } from 'react-router-dom';

const Interview = () => {
    const { interviewID } = useParams(); // Access the 'idnumber' from URL parameters

    
    const dummyData = {
        "id": 10,
        "title": "아이디어에서 실행까지, 유니스페이스의 PM을 만나다", // / for line break
        "image": "http://localhost:3000/static/media/tmp-bg.fffb447c480d0b7becc7.png",
        "views": 18,
        "date": "2023-07-17T04:59:46.012392Z",
        "category": "Team Space",
        "userInfo": {
            "email": "test@mail.com",
            "name": "test name",
            "nickname": null,
            "school": null,
            "country": null,
            "major": null
        },
        "interview": {
            "id": 1,
            "one_line_intro": "“생산적인 삶을 살고자 하는 전 세계의 유학생들이 함께 성장할 수 있는 공간을 만들고 싶어요.”",
            "more_intro": "중국, 캐나다, 미국, 싱가포르 유학 출신 등 다양한 배경을 가진 팀원들이 여름방학에 조금씩 시간을 내서 열심히 유니스페이스를 만들고, 성장을 이끌고 있습니다. 유니스페이스는 올해 6월 11명의 팀원과 본격적으로 시작했는데요. 어떤 목표를 가지고 있을까요? Founder이자 PM으로 일하고 있는 재민 님을 만나보았습니다.",
            "qnas": [
                {
                    "question": "재민 님은 어떤 사람인가요?",
                    "answer": "안녕하세요, 저는 유니스페이스의 Founder이자 현재는 PM으로서 제품화를 기획하며 팀원들 각자의 노력이 성공적인 결과물로 이어질 수 있도록 노력하고 있어요. 평소에 문제를 발견하면 해결하고 싶다고 생각하고, 일단 바로 추진해 보는 편이에요. 제 머릿속에만 있던 것이 함께하는 사람들에게도 전달이 되고, 같이 만들어 내 직접 눈으로 보일 때 정말 설렙니다. 제가 모르는 사람들한테까지도 저희 제품이 가치를 제공해 줄 수 있도록 열심히 일하고 있죠.",
                    "image": null
                },
                {
                    "question": "유니스페이스는 어떻게 시작하게 되었나요?",
                    "answer": "보통 유학한다고 하면, 큰 나라에서 넓은 시야를 갖고 살아갈거라고 생각하지만, 저를 포함해서 주위를 둘러봤을 때 조그만 한인 사회 속, 더 작은 우물 안에서 사는 경우가 많아요. 한국을 봤을 때는, 열심히 살아가는 사람들끼리 모여서 스터디를 하던, 프로젝트를 하는걸 많이 봤는데 해외에서는 이 또한 쉽지 않다고 봤죠. 같은 학교에 다니는 한국 친구 한 명보다 잘하는 게 중요한 건 아니잖아요? 시야를 넓혀서 전 세계 한인 유학생들의 성공과 성장 이야기를 담고 싶어졌어요. 그런 스토리를 제공해주는 사람들, 찾아와주신 분들이라면 목표하는 생태계를 만들 수 있을 거라 확신했죠.",
                    "image": null
                },
                {
                    "question": "우선 콘텐츠로 사람들을 모으겠다는 것이군요! 기존에 콘테츠가 주력 상품인 웹사이트가 많은데 차별화가 가능할까요?",
                    "answer": "사업을 하는 것도 아니고 회사의 형태도 아니기에 그 부분에 대해서는 크게 걱정하지 않아요. 다만, 시장 자체를 작게 잘라서 그 부분에 집중하려고 합니다. 저희 같은 경우는 해외에서 대학교에 다니는 한국인 유학생으로 목표를 한정 지었고 이분들이 함께 성장할 수 있는 공간을 제공함으로써 충분히 다른 매력을 어필할 수 있을 것 같아요. 현재는 1%의 유학생들이 1주일에 1번이라도 방문하는 프로덕트를 만드는 게 첫 번째 목표랍니다!",
                    "image": null
                },
                {
                    "question": "유니스페이스 시작 전에는 어떤 고민과 일을 해왔는지 궁금합니다.",
                    "answer": "한인회를 오래 하며 회장의 자리에 올라가 보기도 했고 여러 나라의 스타트업 업무 경험을 거쳐 이번 여름에는 RBC라는 회사에서 인턴으로 일을 시작했어요. 경험의 종류는 모두 달랐지만, 공통으로 제가 맡았던 일은 본질 자체에 영향을 주는 활동은 아니었어요. 회사에서는 기존에 만들어진 상품을 보다 잘 팔기 위해 글을 쓰고, 광고 상품소개서를 만들고, 리서치를 하는 것들. 동아리의 관점에서는 이미 해오던 걸 잘 지키고 개선하는 일들이 위주였죠. 자연스럽게 0에서 출발해 1까지 가보는 길을 걸어보고 싶었고 이번에는 Core Value 자체에 임팩트를 주고 싶었어요. 저를 포함한 팀원들 모두가 유학생이기에 저희가 공급자이자 수요자가 될 수 있는 서비스를 만들기 시작했답니다.",
                    "image": "http://127.0.0.1:8000/media/images/qna/298065345157818.webp"
                },
                {
                    "question": "재민 님 이야기를 듣다 보니 궁금해졌어요. 유학은 어떻게 오게 되었나요?",
                    "answer": "저는 제가 똑똑한 줄 알았어요. 실제로 중학교 2학년 때는 엄청나게 열심히 공부한 것도 아닌데 550명 중에 2등까지 해본 적도 있었고요. 다만 순전히 운이었던 거죠. 바로 다음 학기에 등수가 세자릿수까지 떨어졌고 목표하던 고등학교에 진학하는 게 어려워졌어요. 그때 서울로 전학을 가는 게 어떠냐는 말을 들었을 때 스스로 분해서인지 그럴 거면 차라리 해외에 가겠다는 말도 안 되는 이야기를 했다네요. 그리고 몇 개월이 지난 후 저는 캐나다 밴쿠버로 갔답니다!",
                    "image": null
                },
                {
                    "question": "캐나다에서의 삶은 어땠나요? 처음 왔을 때 어려움이 많았을 것 같아요.",
                    "answer": "막상 그렇게 큰소리쳤지만 실제로 오기 전까지 열심히 준비를 안 했어요. 하필 제가 왔을 때 교육청이 파업했을 때여서 언제부터 학교에 갈 수 있는지도 불투명했죠. 아는 사람도 없었고, 영어를 잘하는 것도 아니었기에 힘들다는 말밖에 생각나지 않네요. 그 나이에 경험할 수 없는 것들을 정말 많이 해볼 수 있었지만, 그때의 저는 그것의 소중함보다는 한국의 집이 더 그리웠어요. 그래도 이왕 왔는데 어떻게든 좋은 결과를 만들고 떠나고 싶었고, 열심히 노력하다 보니 대학교 진학은 성공적으로 할 수 있었던 거 같아요.",
                    "image": "http://127.0.0.1:8000/media/images/qna/298065345157818.webp"
                },
                {
                    "question": "어느덧 대학교 졸업까지 1년을 앞두고 있는데, 전환점이라고 불릴만한 순간이 있었나요?",
                    "answer": "1학년을 마치고 군대에 입대한 것이에요. 그 당시만 해도 보통 2학년까지는 마치고 가는 게 일반적이었고 많은 분이 반대했어요. 그런데도 제 판단을 믿었고 결과적으로 성공적인 결정이었기에 그 후의 많은 선택에서도 자신을 스스로 믿을 수 있었어요. 조금이라도 일찍 가야 가서 배우게 되는 것들을 더 오랜 시간, 제 인생에 적용할 수 있겠다고 생각했고, 첫 학기의 성과가 만족스럽지 않아서 새롭게 시작해보고 싶은 마음도 있었어요. 한국 학생들이 해외 대학교에 처음 와서 유독 힘들어하는 것 같아요. 저는 그 이유가 인생 처음으로 남들과 같은 출발선에서 시작하는 게임이라 그렇다고 생각해요. 과외나 주변 도움 없이 남들과 같은 조건으로 공부하고 살아가는 게 익숙하지 않은 거죠. 저 역시 그랬지만, 군대에 가서 저 혼자만의 능력으로 긍정적인 변화를 만들어내고 성과에 대한 인정을 받으며 그 벽을 한번 깨본 게 정말 큰 도움이 되었어요.",
                    "image": null
                },
                {
                    "question": "재민 님의 궁극적인 목표는 무엇인가요?",
                    "answer": "한번 사는 인생인데 저만 잘 먹고 잘 사는 걸 목표로 삼고 싶지는 않아요. 제가 하는 일이 세상을 조금이라도 좋게 만들 수 있었으면 하고 그 시도를 하는 많은 순간은 분명히 의미가 있을 거라고 믿어요. 현재는 어떤 특정한 직업이나 산업에 관심이 있기 보다는, 제 능력을 발휘할 수 있는 곳이라면 어디든 합류해서 배우고, 성장하고, 기여하고 싶어요. 시간이 흘러 제 능력이 조금 더 쌓인다면, 제 주변 사람들의 삶을 실질적으로 더 풍요롭게 만드는 일을 하고 싶네요!!",
                    "image": null
                },
                {
                    "question": "처음 유학을 온 게 15살 때잖아요. 그 나이 때의 본인 같은 사람에게 해주고 싶은 말이 있을까요?",
                    "answer": "타협하는 순간을 만들지 않았으면 좋겠어요. 실패에 대해 변명하고 자기 방어하지 말고 스스로 조금 더 솔직해지는 게 중요해요. 그리고 하고 싶은 것이 있다면 어린 나이일수록 과정 자체만으로도 배우는 게 정말 많을거에요. 더 많은 시도와 실패를 경험해보세요!",
                    "image": "http://127.0.0.1:8000/media/images/qna/298065345157818.webp"
                },
                {
                    "question": "마지막으로, 유니스페이스의 사용자가 될 분들에게 한마디만 부탁드려요!",
                    "answer": "해외에서 살아간다는 게 결코 낭만 가득한 여정이 아니란 걸 알아요. 어느 곳에 있든 저희 유니스페이스와 함께 초심을 잃지 않고 함께 성장할 수 있었으면 좋겠어요!",
                    "image": null
                }
            ]
        }
    }

    return (
        <div className="interviewContainer">
            <Banner
                title={dummyData.title}
                category={dummyData.category}
                date={dummyData.date}
                image={dummyData.image}
            />
            <div className="questionsContainer">
                <InterviewTitle
                title={dummyData.title}
                category={dummyData.category}
                location="Canada"
                views="219"
                />
                <QuestionAnswer 
                question={dummyData.interview.one_line_intro}  
                answer={dummyData.interview.more_intro}
                isHighlighted={true} />
                {dummyData.interview.qnas.map(item => (
                    <QuestionAnswer key={item.question} question={item.question} answer={item.answer} isHighlighted={false} />
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