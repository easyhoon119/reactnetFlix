import styles from './Main.module.css';
import { Link } from 'react-router-dom';
import { React } from 'react';

function Footer(props) {
    return (
        <div className={`${styles.footer} ${props.hot}`}>
            <div className={styles.inner}>
                <div className={styles.social_link}>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram-square"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                </div>
                <div className={styles.other_link}>
                    <ul className={styles.link_member}>
                        <li><Link to="#">자막 및 음성</Link></li>
                        <li><Link to="#">음성 지원</Link></li>
                        <li><Link to="#">고객 센터</Link></li>
                        <li><Link to="#">기프트 카드</Link></li>
                        <li><Link to="#">미디어 센터</Link></li>
                        <li><Link to="#">투자 정보(IR)</Link></li>
                        <li><Link to="#">입사 정보</Link></li>
                        <li><Link to="#">이용 약관</Link></li>
                        <li><Link to="#">개인정보</Link></li>
                        <li><Link to="#">법적 고지</Link></li>
                        <li><Link to="#">쿠키 설정</Link></li>
                        <li><Link to="#">회사 정보</Link></li>
                        <li><Link to="#">문의하기</Link></li>
                    </ul>
                </div>
                <div className={styles.service_button}>
                    <Link to="#">
                        <p>서비스 코드</p>
                    </Link>
                </div>
                <div className={styles.copyRight}>
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

export default Footer