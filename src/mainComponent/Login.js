import styled from './Login.module.css'
import { useHistory } from 'react-router-dom'
import { createRef, useEffect, useRef, useState } from 'react'

function Login() {
    return (
        <div className={styled.Login}>
            <div className={styled.header}>
                <div className={styled.inner}>
                    <div className={styled.main_logo}></div>
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
                history.push("/sublogin");
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
                <div className={styled.face_login}>
                    <i className={`fab styles.fa-facebook-square ${styled.squares}`}></i>
                    <div className={styled.log_to_face}>
                        <p>Facebook으로 로그인</p>
                    </div>
                </div>
                <div className={styled.no_member}>
                    <span className={styled.member_first}>Netflix 회원이 아닌가요?</span>
                    <a href="#">지금 가입하세요</a>
                </div>
                <div className={styled.captcha}>
                    <span className={styled.captcha_first}>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다. <a href="#">자세히 알아보기</a></span>
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div className={styled.footer}>
            <div className={styled.inner}>
                <span className={styled.question}>질문이 있으신가요? 문의 전화: 00-308-321-0058</span>
                <div className={styled.footer_menu}>
                    <ul>
                        <li><a href="#">자주 묻는 질문</a></li>
                        <li><a href="#">고객 센터</a></li>
                        <li><a href="#">이용 약관</a></li>
                        <li><a href="#">개인 정보</a></li>
                        <li><a href="#">쿠키 설정</a></li>
                        <li><a href="#">회사 정보</a></li>
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