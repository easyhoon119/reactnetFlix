import styles from './Main.module.css';
import { useHistory, Link } from 'react-router-dom';
import { React, useEffect, useRef, useState } from 'react';

function Hoverprofile() {
    const history = useHistory();

    return (
        <div className={styles.admin_profile}>
            <div className={styles.profile_icon}>
                <div className={styles.hover}>
                    <div className={`${styles.icon1} ${styles.icon}`}></div>
                    <p>규탁</p>
                </div>
                <div className={styles.hover}>
                    <div className={`${styles.icon2} ${styles.icon}`}></div>
                    <p>동우</p>
                </div>
                <div className={styles.hover}>
                    <div className={`${styles.icon3} ${styles.icon}`}></div>
                    <p>지훈</p>
                </div>
                <p className={styles.go_sublogin} onClick={() => { let token = localStorage.getItem('token'); localStorage.setItem('token', token.split('/')[0]); history.push("/sublogin") }}>프로필 관리</p>
            </div>
            <div className={styles.center}>
                <ul>
                    <li><Link to="#">계정</Link></li>
                    <li><Link to="#">고객 센터</Link></li>
                    <li id="logout" onClick={() => { localStorage.clear(); history.push("/") }}>넷플릭스에서 로그아웃</li>
                </ul>
            </div>
        </div>
    );
}

export default Hoverprofile