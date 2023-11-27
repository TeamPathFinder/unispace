import "./CoffeeChat.css"
import { ReactComponent as ArrowDown} from '../../assets/arrow-down.svg'
import { ReactComponent as Coffee} from '../../assets/coffee.svg'
import { ReactComponent as Mail} from '../../assets/mail.svg'
import { ReactComponent as UnispaceLogo} from '../../assets/UnispaceLogo.svg'
import SamsungLogo from '../../assets/samsung.png'
import MicrosoftLogo from '../../assets/microsoft.png'
import UnispaceCircle from "../../assets/UnispaceCircle.png"
import useOnScreen from './UseOnScreen.js'
import { useState, useEffect, useRef } from 'react';


const CoffeeChat = () => {

    const fadeInRef1 = useRef(null);
    const fadeInRef2 = useRef(null);
    const fadeInRef3 = useRef(null);

    const onScreen1 = useOnScreen(fadeInRef1);
    const onScreen2 = useOnScreen(fadeInRef2);
    const onScreen3 = useOnScreen(fadeInRef3);


    return(
        <div className={"coffee-chat-container"}>
            <h1 style={{marginTop: '10rem', marginBottom: '0px'}}> 나와 딱 맞는 유학생과의 1:1 대화</h1>
            <h3 style={{width: '350px', fontSize: '12px', lineHeight:'20px'}}> 열정으로 꿈을 추구하는 대학생들의 새로운 시작, 유니스페이스! 전 세계 탑 유학생들과의 매칭을 통해, 더 크고 의미있는 네트워크를 만들어보세요!</h3>
            
            <div className={"coffee-chat-blue-button"} style={{marginTop: '2.5rem', marginBottom: '1rem'}}>
                <p>5분안에 조건 선택하고 매칭 받기</p>
            </div>

            <p style={{marginTop: '4rem', marginBottom: '0'}}>
            신청자들은 아래 학교/회사에 소속되어 있어요.
            </p>

            <div className={"coffee-chat-logo-container"}>
                <img style={{height: '60px', marginTop: '1rem', marginBottom: '5rem'}} src={SamsungLogo}/> 
                <img style={{height: '60px', marginTop: '1rem', marginBottom: '5rem'}} src={MicrosoftLogo}/>   

                <img style={{height: '60px', marginTop: '1rem', marginBottom: '5rem'}} src={SamsungLogo}/> 
                <img style={{height: '60px', marginTop: '1rem', marginBottom: '5rem'}} src={MicrosoftLogo}/> 
            </div>

            <ArrowDown style={{height: '10px', marginBottom: '6rem'}}/>

            <h3 style={{marginBottom: '5.5rem'}}>
                이런 분들께 추천드립니다!
            </h3>

            <div ref={fadeInRef1} className={`coffee-chat-fade-in-container ${onScreen1 ? 'fadeInOnView' : ''}`}>
                <h2>다양한 국가권 유학생들과 네트워킹</h2>
                <p> "전세계의 다양한 명문대학생들과 네트워킹하며, 졸업 후 취업이나 사회활동에 유용한 커넥션을 만들고 싶은 분"</p>
            </div>
            
            <img src={UnispaceCircle} className={"coffee-chat-unispace-logo"}/>

            <div ref={fadeInRef2} className={`coffee-chat-fade-in-container ${onScreen2 ? 'fadeInOnView' : ''}`}>
                <h2>1:1로 진행되는 프라이빗 “진짜” 대화</h2>
                <p> "유학생만이 알 수 있는 그 감정과 경험을 나누며, 함께 성장할 수 있는 진정한 대화의 공간을 원하는 분” </p>
            </div>

            <img src={UnispaceCircle} className={"coffee-chat-unispace-logo"} style={{transform: "scaleX(-1)"}}/> 

            <div ref={fadeInRef3} className={`coffee-chat-fade-in-container ${onScreen3 ? 'fadeInOnView' : ''}`}>
                <h2>맞춤형 매칭 시스템  </h2>
                <p> "나에게 맞는 엄선된 프로필 매칭을 통해, 공통 관심사나 진로 및 학업 고민들을 공유하고, 창의적인 프로젝트를 함께 진행해보고 싶으신 분" </p>
            </div>

            <ArrowDown style={{height: '10px', marginBottom: '4rem', marginTop: '4rem'}}/>

            <div className={"flex fd-row"} style={{marginBottom: '1rem'}}>
                <div className={"coffee-chat-blue-button2"} 
                    style = {{borderTopRightRadius: 0, 
                    borderBottomRightRadius:0, 
                    display: 'flex', 
                    alignItems: 'center', 
                    borderRight: 'none',
                    paddingLeft: '1.5rem', paddingRight: '1.5rem'}}>
                    <p style={{marginTop: 'auto', marginBottom: 'auto'}}> 커피챗 시작하기 </p>
                </div>
                <div className={"coffee-chat-blue-button2"}
                style = {{borderBottomLeftRadius: 0, borderTopLeftRadius:0, paddingLeft: '0.5rem', paddingRight: '0.5rem'}}>
                    <Coffee style={{height: '12px'}}/>
                </div>
            </div>
            
            <div className={"flex fd-row"} style={{marginBottom: '12rem'}}>
                <div className={"coffee-chat-white-button"} 
                    style = {{borderTopRightRadius: 0, 
                    borderBottomRightRadius:0, 
                    display: 'flex', 
                    alignItems: 'center', 
                    borderRight: 'none',
                    paddingLeft: '1rem', paddingRight: '1rem'}}>
                    <p style={{marginTop: 'auto', marginBottom: 'auto'}}> 문의하기 </p>
                </div>
                <div className={"coffee-chat-white-button"}
                style = {{borderBottomLeftRadius: 0, borderTopLeftRadius:0, display: 'flex', 
                alignItems: 'center', paddingLeft: '0.5rem', paddingRight: '0.5rem'}}>
                    <Mail style={{height: '8px'}}/>
                </div>
            </div>

            <div className={"coffee-chat-footer"}>
                <UnispaceLogo style={{background: 'transparent', height: '20px', marginRight: '10%', marginLeft: 'auto', marginTop: '1rem'}}></UnispaceLogo>
            </div>

        </div>
    );
}

export default CoffeeChat;