import styled from './Login.module.css'
import { useHistory, Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import stylet from 'styled-components';

const { FB } = window;

function Login() {

    const goSelfLogin = () => {
        window.location.reload();
    };

    return (
        <div className={styled.Login}>
            <div className={styled.header}>
                <div className={styled.inner}>
                    <div className={styled.main_logo} onClick={goSelfLogin}></div>
                </div>
            </div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b8e09d9c-d1e7-4800-afd9-810e41ace684/6d68acdf-6efa-4f03-9513-ef482daff117/KR-ko-20210607-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/b8e09d9c-d1e7-4800-afd9-810e41ace684/6d68acdf-6efa-4f03-9513-ef482daff117/KR-ko-20210607-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/b8e09d9c-d1e7-4800-afd9-810e41ace684/6d68acdf-6efa-4f03-9513-ef482daff117/KR-ko-20210607-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/b8e09d9c-d1e7-4800-afd9-810e41ace684/6d68acdf-6efa-4f03-9513-ef482daff117/KR-ko-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
                alt="" />
            <Lmodel />
            <Footer />
        </div>
    );
}

function Lmodel() {

    const history = useHistory();
    const [passwordVal, setpasswordVal] = useState('');
    const [validState, setvalideState] = useState(false);
    const [formState, setFormState] = useState(false);
    const passInput = useRef();

    const nomalLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (formState === true) {
            const email = e.target.childNodes[0];
            const password = e.target.childNodes[1];

            let e_val = email.value;
            let p_val = password.value;

            if (e_val === 'easyhoon119@naver.com' && p_val == '1234') {
                const token = '1q2w3e4r!';
                localStorage.setItem('token', token);
                history.push("/login");
            }
            else {
                alert('사용자가 존재하지 않습니다.');
            }
        }

        else {
            alert('비밀번호 양식이 올바르지 않습니다.')
            passInput.current.focus();
            passInput.current.value = '';
        }

    }

    const responseFacebook = (response) => {
        const { name, email } = response; //페이스북 응답객체에서 id와 email을 할당한 후 
        console.log(name, email);
        console.log(response);
        if (name) {
            history.push('/login');
        }
    };

    // useEffect(() => {
    //     FB.getLoginStatus(function (response) {
    //         statusChangeCallback(response);
    //     });
    // }, []);

    // const statusChangeCallback = (response) => {
    //     if (response.status === 'connected') {
    //         console.log(response.authResponse.userID, response.authResponse.accessToken);
    //         history.push('/login');
    //     }
    // };

    useEffect(() => {
        if (passwordVal.length >= 4) {
            setvalideState(false);
            setFormState(true);
        }

        else if (passwordVal.length >= 1 && passwordVal.length < 4) {
            setvalideState(true);
        }
    }, [passwordVal]);

    const changeVal = () => {
        setpasswordVal(passInput.current.value);
        console.log(passwordVal);
    }

    // const goLogin = () => {
    //     FB.login(function (response) {
    //         if (response.status === 'connected') {
    //             console.log(response.authResponse.userID, response.authResponse.accessToken);
    //             history.push('/login');
    //         }
    //     }, { scope: 'public_profile,email' });
    // };

    return (
        <div className={styled.login_model}>
            <p className={styled.login}>로그인</p>
            <form action="#" id="main_login" onSubmit={nomalLogin}>
                <input type="email" name="email" className={styled.email} placeholder="이메일 주소 또는 전화번호" />
                <input type="password" ref={passInput} name="password" className={styled.password} placeholder="비밀번호" onChange={changeVal} />
                {validState ? <p className={styled.valid}>비밀번호는 4자리 이상입니다.</p> : ''}
                <button type="submit" className={styled.login_btn}>로그인</button>
            </form>
            <div className={styled.toggle_info}>
                <div className={styled.input_check}>
                    <input type="checkbox" name="info" className={styled.info} />
                    <label className={styled.info_label}>로그인 정보 저장</label>
                </div>
                <div className={styled.help}>
                    <p className={styled.info_explain}>도움이 필요하신가요?</p>
                </div>
            </div>
            <div className={styled.additional_info}>
                {/* <div className={styled.face_login}>
                    <i className={`fab fa-facebook-square ${styled.squares}`}></i>
                    <div className={styled.log_to_face} onClick={goLogin}>
                        <p>Facebook으로 로그인</p>
                    </div>
                </div> */}
                <FacebookLogin
                    appId={'2892174151055580'} // 페이스북 앱 등록 후, 생성되는 앱 아이디를 넣어준다.
                    autoLoad={false} // 자동 실행 여부를 정해줄 수 있다.
                    fields="name,email,picture" // fields 설정
                    callback={responseFacebook}

                    render={(renderProps) => (
                        <FaceBookLoginButton>
                            <ButtonInnerDiv onClick={renderProps.onClick}>
                                <i className={`fab fa-facebook-square ${styled.squares}`}></i>
                                <ButtoninnerText>facebook으로 로그인</ButtoninnerText>
                            </ButtonInnerDiv>
                        </FaceBookLoginButton>
                    )}
                ></FacebookLogin>
                <div className={styled.no_member}>
                    <span className={styled.member_first}>Netflix 회원이 아닌가요?</span>
                    <Link to="#">지금 가입하세요</Link>
                </div>
                <div className={styled.captcha}>
                    <span className={styled.captcha_first}>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. <Link to="#">자세히 알아보기</Link></span>
                </div>
            </div>
        </div>
    );
}

const FaceBookLoginButton = stylet.div`
    background-Color : #050505;
    margin-bottom : 15px;
    cursor : pointer;
`;

const ButtonInnerDiv = stylet.div`
    color : grey;
    display : flex;
    align-items : center;
`;

const ButtoninnerText = stylet.h3`
    font-Size : 15px;
    margin-left : 10px;
`;

function Footer() {
    return (
        <div className={styled.footer}>
            <div className={styled.inner}>
                <span className={styled.question}>질문이 있으신가요? 문의 전화: 00-308-321-0058</span>
                <div className={styled.footer_menu}>
                    <ul>
                        <li><Link to="#">자주 묻는 질문</Link></li>
                        <li><Link to="#">고객 센터</Link></li>
                        <li><Link to="#">이용 약관</Link></li>
                        <li><Link to="#">개인 정보</Link></li>
                        <li><Link to="#">쿠키 설정</Link></li>
                        <li><Link to="#">회사 정보</Link></li>
                    </ul>
                </div>
                <div className={styled.language}>
                    <select name="language" className={styled.lang_select}>
                        <option value="">한국어</option>
                        <option value="">English</option>
                    </select>
                </div>
                <div className={styled.copyRight}>
                    <div>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0058</div>
                    <div>대표: 레지널드 숀 톰프슨</div>
                    <div>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</div>
                    <div>사업자등록번호: 165-87-00119</div>
                    <div>클라우드 호스팅: Amazon Web Services Inc.</div>
                    <div>공정거래위원회 웹사이트</div>
                    <div>{"{c28baddf-0f13-406e-8af2-14e6680b519b}"}</div>
                </div>
            </div>
        </div>
    );
}


export default Login;