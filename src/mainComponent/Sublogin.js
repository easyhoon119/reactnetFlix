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

    const goSelfLogin = () => {
        window.location.reload();
    };

    return (
        <div className="SubLogin">
            <header>
                <div className={stylex.inner}>
                    <div className={stylex.main_logo} onClick={goSelfLogin}></div>
                </div>
            </header>
            <Main />
        </div>
    );
};

function Main() {

    const [show, setShow] = useState(false);

    const showEditing = (e) => {
        if (show === false) {
            setShow(true);
            e.target.style.width = '81px';
            e.target.style.color = 'black';
            e.target.style.backgroundColor = 'white';
            e.target.style.fontWeight = '650';
        }

        else {
            setShow(false);
            e.target.style.width = '135px';
            e.target.style.color = '#5e5e5e';
            e.target.style.backgroundColor = '#141414';
            e.target.style.fontWeight = '400';
        }
    };

    return (
        <div className={stylex.main}>
            <div className={stylex.container}>
                <p>{show ? '프로필 관리' : '넷플릭스를 시청할 프로필을 선택하세요'}</p>
                <div className={stylex.profile_icon}>
                    <Hover name={stylex.icon1} real="규탁" state={show} />
                    <Hover name={stylex.icon2} real="동우" state={show} />
                    <Hover name={stylex.icon3} real="지훈" state={show} />
                </div>
                <div className={`${stylex.profile_admin} ${stylex.hover2}`} onClick={showEditing}>{show ? '완료' : '프로필 관리'}</div>
            </div>
        </div>
    );
};

function Hover(props) {

    const history = useHistory();
    const editing = useRef();

    const goIndex = () => {
        if (props.real === '지훈') {
            const token = window.localStorage.getItem('token');
            localStorage.setItem('token', token + '/jihoon');
            history.push("/main");
        }
    };

    const goHover = (e) => {
        let target = e.target;
        if (target.id === 'profile') {
            target.style.border = '1.5px solid white';
            target.nextSibling.style.fontWeight = '650';
            target.nextSibling.style.color = 'white';
        }

        else if (target.id == 'edit') {
            target.parentNode.style.border = '1.5px solid white';
            target.parentNode.nextSibling.style.fontWeight = '650';
            target.parentNode.nextSibling.style.color = 'white';
        }
    };

    const notHover = (e) => {
        let target = e.target;
        if (target.id === 'profile') {
            target.style.border = 'none';
            target.nextSibling.style.fontWeight = '400';
            target.nextSibling.style.color = '#5e5e5e';
        }

        else if (target.id == 'edit') {
            target.parentNode.style.border = 'none';
            target.parentNode.nextSibling.style.fontWeight = '400';
            target.parentNode.nextSibling.style.color = '#5e5e5e';
        }
    };


    return (
        <div className={stylex.hover}>
            <div className={`${props.name} ${stylex.icon}`} id="profile" onClick={goIndex} onMouseEnter={goHover} onMouseLeave={notHover}>{props.state === true ? <i className="far fa-edit" id="edit" ref={editing}></i> : ''}</div>
            <p>{props.real}</p>
        </div>
    );
}

export default Sublogin;