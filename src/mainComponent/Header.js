import styles from './Main.module.css';
import Hoverprofile from './Hoverprofile.js';
import { useHistory } from 'react-router-dom';
import { React, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';


function Headers() {

    const [url, setUrl] = useState('');
    const history = useHistory();
    const [pos, setPos] = useState(0);
    const Headerscroll = useRef();
    const Adminprofile = useRef();


    const updateScroll = () => {
        if (Headerscroll.current) {
            setPos(Headerscroll.current.getBoundingClientRect());
            if (pos.top + window.pageYOffset > 0) {
                Headerscroll.current.style.backgroundColor = '#141414';
            }
            else {
                Headerscroll.current.style.backgroundColor = '';
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
        setUrl(history.location.pathname);

        return () => window.removeEventListener('scroll', updateScroll);
    }, [pos]);

    const showProfile = () => {
        if (Adminprofile) {
            Adminprofile.current.childNodes[0].style.display = 'block';
            Adminprofile.current.childNodes[1].style.display = 'block';
            Adminprofile.current.previousSibling.style.transform = 'rotate(0deg)';
        }
    };

    const endProfile = () => {
        if (Adminprofile) {
            Adminprofile.current.childNodes[0].style.display = 'none';
            Adminprofile.current.childNodes[1].style.display = 'none';
            Adminprofile.current.previousSibling.style.transform = 'rotate(180deg)';
        }
    };

    const goSelfLogin = () => {
        window.location.reload();
    };

    const menuClick = (e) => {
        history.push(`/${e.target.id}`);
        setUrl(`/${e.target.id}`);
    };

    return (
        <div className={styles.headers}>
            <header style={{ Zindex: 2000 }} ref={Headerscroll}>
                <div className={styles.inner}>
                    <div className={styles.logo} style={{ cursor: 'pointer' }} onClick={goSelfLogin}></div>
                    <div className={styles.menu_bar}>
                        <ul className={styles.menu_list}>
                            <NavButtonStyled page={url} id="main"><li onClick={menuClick} id="main">홈</li></NavButtonStyled>
                            <NavButtonStyled page={url} id="main/tvProgram"><li onClick={menuClick} id="main/tvProgram">TV 프로그램</li></NavButtonStyled>
                            <NavButtonStyled page={url} id="main/movie"><li onClick={menuClick} id="main/movie">영화</li></NavButtonStyled>
                            <NavButtonStyled page={url} id="main/hotContent"><li onClick={menuClick} id="main/hotContent">NEW! 요즘 대세 콘텐츠</li></NavButtonStyled>
                            <NavButtonStyled page={url} id="main/myContent"><li onClick={menuClick} id="main/myContent">내가 찜한 콘텐츠</li></NavButtonStyled>
                        </ul>
                    </div>
                    <div className={styles.menu_icon}>
                        <i className={`fas fa-caret-up ${styles.playprofile}`}></i>
                        <div ref={Adminprofile} className={styles.user_face} style={{ cursor: 'pointer' }} onMouseOver={showProfile} onMouseOut={endProfile}>
                            <i className="fas fa-caret-up"></i>
                            <Hoverprofile />
                        </div>
                        <i className="fas fa-bell"></i>
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </header>
        </div >
    );
}

const NavButtonStyled = styled.div`
    color:${props => props.page === `/${props.id}` ? 'white' : '#a0a0a0'};
`;

export default Headers