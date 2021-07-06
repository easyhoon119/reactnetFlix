import stylex from './Sublogin.module.css'
import { useHistory } from 'react-router-dom'
import { createRef, useEffect, useRef, useState } from 'react'

function Sublogin() {

    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem('token');

        if (token == null) {
            history.push("/login");
        }
    });

    return (
        <div className="SubLogin">
            <header>
                <div className={stylex.inner}>
                    <div className={stylex.main_logo}></div>
                </div>
            </header>
            <Main />
        </div>
    );
};

function Main() {
    return (
        <div className={stylex.main}>
            <div className={stylex.container}>
                <p>넷플릭스를 시청할 프로필을 선택하세요</p>
                <div className={stylex.profile_icon}>
                    <Hover name={stylex.icon1} real="규탁" />
                    <Hover name={stylex.icon2} real="동우" />
                    <Hover name={stylex.icon3} real="지훈" />
                </div>
                <div className={`${stylex.profile_admin} ${stylex.hover2}`}>프로필 관리</div>
            </div>
        </div>
    );
};

function Hover(props) {

    const history = useHistory();

    const goIndex = () => {
        if (props.real === '지훈') {
            const token = window.localStorage.getItem('token');
            localStorage.setItem('token', token + '/jihoon');
            history.push("/");
        }
    };

    const goHover = (e) => {
        let target = e.target;
        target.style.border = '1.5px solid white';
        target.nextSibling.style.fontWeight = '650';
        target.nextSibling.style.color = 'white';
    };

    const notHover = (e) => {
        let target = e.target;
        target.style.border = 'none';
        target.nextSibling.style.fontWeight = '400';
        target.nextSibling.style.color = '#5e5e5e';
    };


    return (
        <div className={stylex.hover}>
            <div className={`${props.name} ${stylex.icon}`} onClick={goIndex} onMouseEnter={goHover} onMouseLeave={notHover}></div>
            <p>{props.real}</p>
        </div>
    );
}

export default Sublogin;