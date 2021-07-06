import styles from './Main.module.css'
import { useHistory } from 'react-router-dom'
import { createRef, useEffect, useRef, useState } from 'react'

function MainScreen() {

    const [list, setList] = useState('');
    const [list_kor, setList_kor] = useState('');
    const [list_kor_copys, setList_kor_copys] = useState('');
    let list_kor_copy = [...list_kor];
    const [list_only, setList_only] = useState('');
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem('token');

        if (token == null) {
            history.push("/login");
        }

        setTimeout(() => {
            setList([['Run On', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZzdNnoG93Vq6T7blIphj4jZ86XS3m3ZHwGhtwCJaBvy7w-iuhnGUAMdPIJPx0WOvuJz9Hpnk7y5_utiHlwSZliuCrc.webp?r=77f'],
            ['이구역의 미친x', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcM0eqeI_KHzW9niYOvw2YIIX1z8FJvCqupJzeRIHCfBLE_zxYMZY3u3pF_cdWqwB8ZMPUI9HxZpBIrn3HNbMFdZv8hmTPwRM1Hq_7nRSD9-Gywmh4O4HOP2XVSgSBoZWpxCEMVdnTaNAgCo6AFVc-LKC-BuaDH0tw_xrtQaQJa7I8YvGc4sfOVG8rOG.webp?r=6f5'],
            ['쿠로코의 농구', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbFFIT36JwEl6U8BN21KrET2I7jtvAVHFV2sRWy74PTOez-6JZrUruxCQTw3dpe7lA30P5barWepvjA6A2FObAbgv28.webp?r=d98'],
            ['암살 교실', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVQFxJkf5yOwDfSppgc5YqFA8mFH3cBj4t5PhTeag2LykV0a2qpR482xmdEBzAbd3UwzT_qj5-Wut-812VjQFI5Ensk.webp?r=ffd'],
            ['로스쿨', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVgZVbvP3GLkBQuYCKXhpY6ExdybZsHVDnElr3Wyo8azxlIChIOb6NN0rVW47tjClXDd_V0JhAXd2piE3hSanEwWiI4VUzZdA-BJ91z9ZIeJW04I5_J2wcUF8U4VtkeiNg.webp?r=08d'],
            ['국가부도의 날', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTOX5KFKrWgovrFPrRTqstMVOvo-vrml_ISPFc8b9TYKXcU8tVWbNajpllEpfXfglrgAC9vm-qrFKA1AdqviXqCTQAs.webp?r=f11'],
            ['선배 그 립스틱 바르지 마요', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfQvKA6i3xUWGGfTGZhdt81mPnHbagEkIrofL-OKuHUUdZuBcH-Q6Kq6bG91Har-liismMXxBIzRwnV0V8SXrmz3GJU.webp?r=69b']]
            );
        }, 2000);

        setTimeout(() => {
            setList_kor([['알고 있지만', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW3ETp3kOTb_LYmZG79hDmiEh3peHS8kWbAsj7z91qYVX6-6i4P7ijjBvRVORMw9zv7I86DzaIsqz_6oIIbo8AnEcnaDhs1YlHgcqNT-gyeHPCmdjzeLee0UAj16He_LEE9nxgK0asiKbb9xhiWMhSs-094YCjx3oXDtzn-ZrlgXpCpuEfFpj5d93eMV.webp?r=e06'],
            ['무브 투 헤븐', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfKCoxB0kw9imN7gtZG__BBGxryo3fjVpByvfnOdBK4CDhfDRrHVrqpbruNjAL5YF8H-4glU4Jlb-GxoNwDHXCsdhPIOjPuM4Rv1mH8NFfd2zzlYcxq65PoL1YjoK-b09x9K_R7o0JIz5bHUT5OeJiflTJ4Dm0K4FvBPVhZhr0_YE4rZ4NxkHFc.jpg?r=f31'],
            ['뽕숭아 학당', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZBx3u-_aSLzxU3uuMD57_TuQQxkARTqwd7BPZwD3d-jY37728TX8Rh7bUqIpp4IsnWYNPry6RWSgg-EfrGYioA9cVq1P7EPGuFDKAvJXrBM-A0c3zJSC02f-ykLxp9yOA.webp?r=6fb'],
            ['내일 지구가 망해버렸으면 좋겠어', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa9diV550oN1jZlf5QyFePLFpv2RYNfaj7hCdiSHlhSOmInHJWKnY68QxsdEwhgYuesuPDiI9WmCpjGpIW5PugqpZhOybNrqo_CCcoito5p8c8bfEpzlvCn8p32-9pNosOhrTgjq43P81QT93aOO-GI02IiS5Hv7UBZCJytbok33rfvJz9MJhOU.jpg?r=015'],
            ['라켓 소년단', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZJivj0P6_xhBqvdchAUnKbDZZDy6LXLAQuxulwtJe1cahgRtxt8iZR3xevO4Ql8jkndCBZwoIhHHmPPBrVzj7ef3GFqRo_cJOSgrZFG2z55UBdsi7GEqbtZXt2gQuHRSQ.webp?r=3d1'],
            ['마인', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbp2ELN4reATPUQ6rhNK_VFynib-WrhQ4Z17O65wOq3eB41WM0Gx4plPPNGPY0WqvaJ521fLf41PH950cinO35azfsdnA8JjFuovSPPVYMq0nfACKYPxpgESGKRkx3Eqk1uVoSeCBIzzi_yqSdP03iDbO-N40KPFEsTRIT2sIjMS_QV6HsyQq3of3LxS.webp?r=d75'],
            ['나의 아저씨', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABab39TGFZ8HVjv4NZ3I9LeI4V0J53ORNevmoYkvqrd9B57HPGhRr6_tjU8wki24b9VUWKqAB6RRUesQ4uIO-9kskIys.webp?r=a6c'],
            ['18 어게인', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUkoVoAiF1gO3GirtvHlwVNYGXo0QSjj6HeWtvmspY17Wc03x3yaqeb6SGioT4iKXwFd1qlgv0If3qBDcqAgng_tzDU.webp?r=be3']]
            );
        }, 2000);

        setTimeout(() => {
            setList_kor_copys([['알고 있지만', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW3ETp3kOTb_LYmZG79hDmiEh3peHS8kWbAsj7z91qYVX6-6i4P7ijjBvRVORMw9zv7I86DzaIsqz_6oIIbo8AnEcnaDhs1YlHgcqNT-gyeHPCmdjzeLee0UAj16He_LEE9nxgK0asiKbb9xhiWMhSs-094YCjx3oXDtzn-ZrlgXpCpuEfFpj5d93eMV.webp?r=e06'],
            ['무브 투 헤븐', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfKCoxB0kw9imN7gtZG__BBGxryo3fjVpByvfnOdBK4CDhfDRrHVrqpbruNjAL5YF8H-4glU4Jlb-GxoNwDHXCsdhPIOjPuM4Rv1mH8NFfd2zzlYcxq65PoL1YjoK-b09x9K_R7o0JIz5bHUT5OeJiflTJ4Dm0K4FvBPVhZhr0_YE4rZ4NxkHFc.jpg?r=f31'],
            ['뽕숭아 학당', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZBx3u-_aSLzxU3uuMD57_TuQQxkARTqwd7BPZwD3d-jY37728TX8Rh7bUqIpp4IsnWYNPry6RWSgg-EfrGYioA9cVq1P7EPGuFDKAvJXrBM-A0c3zJSC02f-ykLxp9yOA.webp?r=6fb'],
            ['내일 지구가 망해버렸으면 좋겠어', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa9diV550oN1jZlf5QyFePLFpv2RYNfaj7hCdiSHlhSOmInHJWKnY68QxsdEwhgYuesuPDiI9WmCpjGpIW5PugqpZhOybNrqo_CCcoito5p8c8bfEpzlvCn8p32-9pNosOhrTgjq43P81QT93aOO-GI02IiS5Hv7UBZCJytbok33rfvJz9MJhOU.jpg?r=015'],
            ['라켓 소년단', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZJivj0P6_xhBqvdchAUnKbDZZDy6LXLAQuxulwtJe1cahgRtxt8iZR3xevO4Ql8jkndCBZwoIhHHmPPBrVzj7ef3GFqRo_cJOSgrZFG2z55UBdsi7GEqbtZXt2gQuHRSQ.webp?r=3d1'],
            ['마인', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbp2ELN4reATPUQ6rhNK_VFynib-WrhQ4Z17O65wOq3eB41WM0Gx4plPPNGPY0WqvaJ521fLf41PH950cinO35azfsdnA8JjFuovSPPVYMq0nfACKYPxpgESGKRkx3Eqk1uVoSeCBIzzi_yqSdP03iDbO-N40KPFEsTRIT2sIjMS_QV6HsyQq3of3LxS.webp?r=d75'],
            ['나의 아저씨', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABab39TGFZ8HVjv4NZ3I9LeI4V0J53ORNevmoYkvqrd9B57HPGhRr6_tjU8wki24b9VUWKqAB6RRUesQ4uIO-9kskIys.webp?r=a6c'],
            ['18 어게인', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUkoVoAiF1gO3GirtvHlwVNYGXo0QSjj6HeWtvmspY17Wc03x3yaqeb6SGioT4iKXwFd1qlgv0If3qBDcqAgng_tzDU.webp?r=be3']].reverse());
        }, 2000);

        setTimeout(() => {
            setList_only([['투 핫', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABV1N6uqK1pqLhex6yA2rupxxYZR448aIa8-OLj4rDzbcHgZCZobPAEycSvsB3gMXl7VyAhliRiSrTpFtX-9gXYaxnji-88aH4NF_TdbdR32iZt78zMSbVcpZLn4YpWrci5jzmZC7TbLv4dtxGzcAWGFXsyO8vApGLT91fywRhxw7xzXhfATMsqh6nJH5nfGK55q2wfzl.webp?r=540'],
            ['내일 지구가 망해버렸으면 좋겠다', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABfgzVfyB2pri2rWHMxOcPVs9isV56cEX4R01L-Og55TLecfiUeoqOD5Udmn_zEMlK6EmnxGaVLL_y5EUCwpcSAUO3EqFyzV1sga0Yn7sShpP8mSHOxMkJ1CKRh-g96g14j5PVwx9XQHR5tgS6stF7qUNGxnaBqP8Sa-IvKcXQbCXgSUhpqDOCqfKRrqd23RQItyKo49bgA7Ip3LlK_o4vOMfxJJsf0S0-LEZg162n3I6t2kYREjHd7fOmnLBiBgjSh8.webp?r=219'],
            ['무브 투 헤븐', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABQcQ8l9BJUygegjtBUktJrZSz1h8L0_F7m4mI5hnJaV-bNZHa99a5JPghGVN2u_U9-5xC6ldbKuTVQErMC0C3F9qMCZ9pWwn1uidc5VuUrXGYG-GB60Cvb_UMNglKojzftuvSX14meLmAm6lCS02ThueEsS0p7klYyCoN2iHu4jPdLZ6do7qdPWKuidyQJAUJFL-VJvBdhzyyUB9H8zTjpyhA6lJBho1rX1BIA3FFOSsMfQ14GcV7Ywu97NPn_9aqmE.webp?r=3d9'],
            ['그녀의 이름은 노노', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABXnE3oCuXQc2hoWJ2fK6_Izium_uDm8LTVWNct_M-XPTvkhoR1A5wG2PinKHIWlDdjW8KWnbvSTKlCxQ9id5NGmySCbToQhk9Ko4cisCMoj-RrBetsxrIYmNVIi9B-blOrAdttOQ-bEgdHSkng6iMiFMdir0qoN33Hi_NSxV-1NaSGis8pBEQR3u_tNl-44QMuyIA8z0dTVMLHJunBPVkqysiDXjtYPz8QiVpTarSvat0nDIfqXKEY1c_luvlTKaHJ0.webp?r=218'],
            ['스위트 홈', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABWx8jMD9bfeWu_vJsXHN_jfDzYkMTmQ6ChfPzkLxSFOWwd36DsaFl6J1Zx2PFyLZk13UUYygUBwFm0RcLxms0wapMW3spc2wZZxBrAW1XHLZtvOVG5RTJo_lnDcT5K5Y_IoUNQydrPjSoryvrzRa3sxOu4H2aNQMUMpdAmgDtTwc6TKA_DFXMQ6TquahGNaGz0bovJef.webp?r=55d'],
            ['새콤달콤', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABWx8jMD9bfeWu_vJsXHN_jfDzYkMTmQ6ChfPzkLxSFOWwd36DsaFl6J1Zx2PFyLZk13UUYygUBwFm0RcLxms0wapMW3spc2wZZxBrAW1XHLZtvOVG5RTJo_lnDcT5K5Y_IoUNQydrPjSoryvrzRa3sxOu4H2aNQMUMpdAmgDtTwc6TKA_DFXMQ6TquahGNaGz0bovJef.webp?r=55d'],
            ['좋아하면 울리는', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABeVGb5mrvrs4ZzA2sEOATRC1D58fiG2SOZJhZV-LtbiR1bZk6TujMPXNO8MSIweHgP5NZ-QTz3xwKt5W-NheYTD07ay2X6nZCYoOSua1LiAD4RkDvb_-ONrQN-VaGsqZ-nVvu_B4vcHE4DBYW81DnBMPNLmoMy3AVtZkOIpeTQXBARjRkNFBr1YyO5MNyP138iDTaZJO.webp?r=00b'],
            ['엘리트 들', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABa6FWrsgvwLjEtCdTC2TMc9xPdQl3M5uQpDnLGr1jb2loOUagylVoqHFcr1yq8FmiMPPTUvzMvLVRBjo5waPT9R446qWfM8_9b14jCMO0z1wG0UG30kbXCApYvwfzU_oICbCSyWIcr6hjC_bIkTIOaxyqIT25dQrOKyO_PmJp-VzqACC5YBuatM0wGeEgr50tMl-dgJHOcZk6hFnD3XxfwOiikOKdegzblM-nTxY-g.webp?r=b65']]
            );
        }, 2000);
    }, []);

    return (
        <div className="MainScreen">
            <Headers />
            <div className={styles.user_play_data}>
                <ListPlay list={list} name={styles.user_movie} cname={styles.user_container} title="지훈 님이 시청 중인 콘텐츠" />
                <ListPlay list={list_kor} name={styles.user_movie} cname={styles.kor_container} title="한국 드라마 & 버라이어티" />
                <ListPlay list={list_kor_copys} name={styles.user_movie} cname={styles.hot_container} title="지금 뜨는 콘텐츠" />
                <ListPlay list={list_only} name={styles.only_movie} cname={styles.only_container} title="오직 넷플릭스에서" />
                <ListPlay list={list_kor} name={styles.user_movie} cname={styles.replay_container} title="다시보기 추천 콘텐츠" />
                <ListPlay list={list_kor_copys} name={styles.user_movie} cname={styles.korjam_container} title="한국 TV 드라마 로맨스" />
                <ListPlay1 />
                <ListPlay list={list_kor} name={styles.user_movie} cname={styles.ani_container} title="애니메이션 시리즈" />
                <ListPlay list={list_kor_copys} name={styles.user_movie} cname={styles.komovie_container} title="한국 영화" />
            </div>
            <Footer />
        </div>
    );
}

function Headers() {

    const [pos, setPos] = useState(0);
    const Headerscroll = useRef();
    const Adminprofile = useRef();
    const yegoVideo = useRef();
    const restart = useRef();
    const sound_on = useRef();
    const muted = useRef();

    useEffect(() => {
        const navBar = document.querySelector('header');
        setPos(navBar.getBoundingClientRect());
        if (pos.top + window.pageYOffset > 0) {
            navBar.style.backgroundColor = '#141414';
        }
        else {
            navBar.style.backgroundColor = '';
        }
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

    useEffect(() => {
        setTimeout(() => {
            yegoVideo.current.play();
            restart.current.style.display = 'none';
            sound_on.current.style.display = 'block';
            muted.current.style.display = 'none';
        }, 2000);
    }, []);

    const controlVideo = (e) => {
        if (e.target.id === 'Up') {
            yegoVideo.current.muted = false;
            yegoVideo.current.volume = 0.5;
            e.target.style.display = 'none';
            e.target.nextSibling.nextSibling.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
        }

        if (e.target.id === 'Mute') {
            yegoVideo.current.muted = true;
            yegoVideo.current.volume = 0.5;
            e.target.style.display = 'none';
            e.target.previousSibling.style.display = 'block';
            e.target.nextSibling.style.display = 'none';
        }

        if (e.target.id === 'redo') {
            yegoVideo.current.play();
            e.target.style.display = 'none';
            e.target.previousSibling.previousSibling.style.display = 'block';
            e.target.previousSibling.style.display = 'none';
        }

        if (e.target.id === 'video') {
            yegoVideo.current.poster = 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTx8ZUPqCWCUruMophPXJc6ELYsiGcmFiqmgnaofd6Ul6kAJgMfooJS0eQ15Z5n-nCfWzupFBd2p4xlYJ8Cg-RMmvbqB.webp?r=1e6';
            yegoVideo.current.src = '../queens.mp4';
            restart.current.style.display = 'block';
            sound_on.current.style.display = 'none';
            muted.current.style.display = 'none';
        }
    };

    return (
        <div className={styles.headers}>
            <video src="./queens.mp4" id="video" ref={yegoVideo} onEnded={controlVideo} poster="https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTx8ZUPqCWCUruMophPXJc6ELYsiGcmFiqmgnaofd6Ul6kAJgMfooJS0eQ15Z5n-nCfWzupFBd2p4xlYJ8Cg-RMmvbqB.webp?r=1e6" muted className={styles.yego_video}></video>
            <header style={{ Zindex: 2000 }} ref={Headerscroll}>
                <div className={styles.inner}>
                    <div className={styles.logo}></div>
                    <div className={styles.menu_bar}>
                        <ul className={styles.menu_list}>
                            <li>홈</li>
                            <li style={{ color: '#a0a0a0' }}>TV 프로그램</li>
                            <li style={{ color: '#a0a0a0' }}>영화</li>
                            <li style={{ color: '#a0a0a0' }}>NEW! 요즘 대세 콘텐츠</li>
                            <li style={{ color: '#a0a0a0' }}>내가 찜한 콘텐츠</li>
                        </ul>
                    </div>
                    <div className={styles.menu_icon}>
                        <i className={`fas fa-caret-up ${styles.playprofile}`}></i>
                        <div ref={Adminprofile} className={styles.user_face} onMouseOver={showProfile} onMouseOut={endProfile}>
                            <i className="fas fa-caret-up"></i>
                            <Hoverprofile />
                        </div>
                        <i className="fas fa-bell"></i>
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </header>
            <div className={styles.control_video}>
                <div className={styles.inner}>
                    <div className={styles.control_container1}>
                        <img src="https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABe7ZPM_mVdLIUY5AdG-9P3H-ZAmxKCUnr31w08rxTbQziSXWuxv252kn86xKtNnPkMOdbF9Z63xKi5dbx8gy7X0yxZeRovwXg_b0.webp?r=281" alt="title" />
                        <p>천상천하 유아독존! 세상 혼자 잘난 요괴 손오공과 요괴 중의 요괴 우마왕이 맞붙는다. 여기에 요괴를 보는 여인 삼장까지. 운명을 걸어라, 암흑의 세상에서 빛을 찾아라!</p>
                        <div className={styles.control_btn1}>
                            <div className={`${styles.btn} ${styles.play_btn_header}`}>
                                <i className="fas fa-play"></i>재생
                            </div>
                            <div className={`${styles.btn} ${styles.info_btn_header}`}>
                                <i className="fas fa-info-circle"></i>상세정보
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.control_btn2}>
                <i className={`fas fa-volume-up ${styles.volumeUp}`} ref={sound_on} id="Up" onClick={controlVideo}></i>
                <i className={`fas fa-volume-mute ${styles.volumeMute}`} ref={muted} id="Mute" onClick={controlVideo}></i>
                <i className={`fas fa-redo ${styles.redo}`} ref={restart} id="redo" onClick={controlVideo}></i>
                <span className={styles.year}>15+</span>
            </div>
        </div >
    );
}

function ListPlay(props) {

    const [state, setState] = useState('false');
    let boolValue = true;
    const [count, setCount] = useState(0);
    const [cindex, Setcindex] = useState(0);
    const [slideCount, setSlideCount] = useState(0);
    const Hovercontainer = useRef();
    const wowImage = useRef();
    const userMovie = useRef();
    const SlideGo = useRef();

    const shownext = () => {
        if (Hovercontainer) {
            Hovercontainer.current.nextSibling.style.display = 'flex';
        }
    };

    const updateWidth = (slideWidth, slides, slide) => {
        let currentSlides = slide;
        let newSlideCount = currentSlides.length;
        let newWidth = slideWidth * newSlideCount + 'px';
        slides.style.width = newWidth;
    }

    const setInitailPos = (slideWidth, SlideCount, slides) => {
        let initialPos = -(slideWidth) * SlideCount;
        slides.style.transform = `translate(${initialPos}px)`;
    }

    const moveSlider = (num, slides, slideWidth, slideCount, SlideGo) => {
        slides.style.transform = `translate(${-num * slideWidth - (slideWidth) * slideCount}px)`;
        Setcindex(num);
        if (num == slideCount || num == -slideCount) {
            setTimeout(() => {
                console.log(slides);
                slides.classList.remove(`${styles.animate}`);
                slides.style.transform = `translate(${-(slideWidth) * slideCount}px)`;
                Setcindex(0);
            }, 500);
            setTimeout(() => {
                slides.classList.add(`${styles.animate}`);
            }, 600);
        }
    }

    const Cloning = () => {
        if (SlideGo) {
            SlideGo.current.nextSibling.style.display = 'flex';
            let slides = SlideGo.current.previousSibling;
            let slide = slides.childNodes;
            let slide_cpy = [...slide];
            let slideWidth = slide[1].offsetWidth;
            if (SlideGo.current.attributes[1].value == 0) {
                setSlideCount(slide.length);
                setTimeout(() => {
                    for (let i = 0; i < SlideGo.current.attributes[3].value; i++) {
                        let cloneSlide = slide_cpy[i].cloneNode(true);
                        cloneSlide.classList.add('clone');
                        slides.append(cloneSlide);
                    }

                    for (let i = SlideGo.current.attributes[3].value - 1; i >= 0; i--) {
                        let cloneSlide = slide_cpy[i].cloneNode(true);
                        cloneSlide.classList.add('clone2');
                        slides.prepend(cloneSlide);
                    }
                    updateWidth(slideWidth, slides, slide);
                    setInitailPos(slideWidth, SlideGo.current.attributes[3].value, slides);
                    setInterval(() => {
                        slides.classList.add(`${styles.animate}`);
                    }, 100);
                    setCount(count + 1);
                }, 200);
            }
            else {
                moveSlider(cindex + 1, slides, slideWidth, SlideGo.current.attributes[3].value, SlideGo);
            }
        }
    };

    const showDetail = (e) => {
        if (boolValue === true) {
            e.target.setAttribute('state', 'true');
            setState(e.target.attributes[2]);
            e.target.nextSibling.style.display = 'block';
            boolValue = false;
        }
    };

    const notDetail = (e) => {

        console.log(e.target.id);
        if (e.target.id === 'parent') {
            e.target.childNodes[2].style.display = 'none';
        }
        else if (e.target.id === 'image') {
            e.target.nextSibling.style.display = 'none';
        }
        else if (e.target.id === 'detail') {
            e.target.style.display = 'none';
        }
        else {
            e.target.parentNode.style.display = 'none';
        }
        boolValue = true;
    };

    const list_default = props.list.length === 0 ? <i className={`fas fa-spinner ${styles.spinner}`}></i> : props.list.map((li, index) => (<div key={index} ref={userMovie} id="parent" className={props.name} onMouseLeave={notDetail}> <img src={li[1]} alt={li[0]} id="image" className={styles.wow} state='false' ref={wowImage} onMouseEnter={showDetail} /><Moviedetail states={state} parent={wowImage} alt={li[0]} /></div >));

    return (
        <div className={styles.inner}>
            <p>{props.title}</p>
            <div ref={Hovercontainer} className={`${props.cname} ${styles.hover_container}`} onMouseEnter={shownext}>
                {list_default}
            </div>
            <i className={`fas fa-chevron-right ${styles.next}`} count={count} currentindex={cindex} slidecount={slideCount} ref={SlideGo} onClick={Cloning}></i>
            <i className={`fas fa-chevron-right ${styles.before}`}></i>
        </div>
    );
}

function Moviedetail(props) {

    return (
        <div className={styles.movie_detail} id="detail">
            <div className={styles.detail_btn}>
                <i className="far fa-play-circle"></i>
                <i className="fas fa-plus-circle"></i>
                <i className="far fa-thumbs-up"></i>
                <i className="far fa-thumbs-down"></i>
                <i className="far fa-times-circle"></i>
                <i className="fas fa-chevron-circle-down"></i>
            </div>
            <p className={styles.detail_title}>시즌 1: 1화 "{props.alt}"</p>
            <div className={styles.detail_time}>
                <progress id="watch_time" max="100" value="30" className={styles.time_rating}></progress>
                <p className={styles.time_watch}>총 30분 중 12분</p>
            </div>
        </div>
    );
}

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
                    <li><a href="#">계정</a></li>
                    <li><a href="#">고객 센터</a></li>
                    <li id="logout" onClick={() => { localStorage.clear(); history.push("/login") }}>넷플릭스에서 로그아웃</li>
                </ul>
            </div>
        </div>
    );
}

function ListPlay1() {

    const [list_ranking, setList_ranking] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setList_ranking([['마인', 'one', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeJS0OPjiWN7rEmnKMxeUV_ao2eDIW7JOKpTXdEZ1ox39fHU2xqA2khG5G6drBiCaUNW7_EHCc2PFT4EykbYcHhlo31OXnWXsEWGw9p9_EoByb8J26Cm6KFyzIOr2f19hxHo63MEUdT8-Q.jpg?r=f25'],
            ['이 구역의 미친년', 'two', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSMndg5x5A5l2PxtF8XE0uKcbmP9ZQmcKdfluVPC57O3Cj9ly8cYqIZekuNhWxvN9y1f1z2_goyFDQu4bzzdzaNEswDCIMS5bqayUGWDAy1RRASTZnZy7l-q7-fIBMkJNrQ.webp?r=fc2'],
            ['슬기로운 의사생활+', 'three', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbRHSboQgJ71QdbBb5V7ckLtlpbESoxjKhmFoxrPlfcl6tVJ-FV0pwhM7JG-AUBAcnNtO_qz7QrHINA_Oh6PGAYpG5qHNtRVamXqhWwmgIBr2Nw8VqTYBJfIsKlORflDCHGQzE6ol2XHkA.jpg?r=e1d'],
            ['알고있지만', 'four', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABW63CbAEvgjNj5NPw5dtUbNDgOVxtgq-1shDN5Y2cSFJtYnN4u58oIdUW1O6XNnDqTEYXOUEWYA4rtXTDfz-kwhmfBf1QQxw9MS5eRgJLRPMpQsimX0JeyaBZwksO1qIfVmNiJLp_Kz84g.webp?r=19d'],
            ['결혼작사 이혼 작곡', 'five', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZzkhURmI2Nd7EcI363gdEvDg-5FjQfU0hf-J4mWNUSEhf77MPmdADAE-EyHlNc2rPXMu0OyzlZC0EH9I2d_fDqjqbltE6Y1pKTOA6YcyYU5HYGDKH_SZ9ryuyRr81FNhfNxzChJs1_rjA.webp?r=678'],
            ['내일 지구가 망해버렸으면 좋겠다', 'six', 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeBq5tEwE8-MKPOuyS1B2njnvjw-7DyEhNL5TEKDhJRTyBmOi4-KNQv-W42rxS_OQZoSOl5pEG-Zy6Kk_GWgDGhKw3tHyzcgB_EvTdqreOgNGCZZojCqAMiSrKfbwQ.jpg?r=459']]
            );
        }, 2000);
    }, []);
    const [count, setCount] = useState(0);
    const [cindex, Setcindex] = useState(0);
    const [slideCount, setSlideCount] = useState(0);
    const SlideGo = useRef();
    const Hovercontainer1 = useRef();

    const updateWidth = (slideWidth, slides, slide) => {
        let currentSlides = slide;
        let newSlideCount = currentSlides.length;
        let newWidth = slideWidth * newSlideCount + 'px';
        slides.style.width = newWidth;
    }

    const setInitailPos = (slideWidth, SlideCount, slides) => {
        let initialPos = -(slideWidth) * SlideCount;
        slides.style.transform = `translate(${initialPos}px)`;
    }

    const moveSlider = (num, slides, slideWidth, slideCount, SlideGo) => {
        slides.style.transform = `translate(${-num * slideWidth - (slideWidth) * slideCount}px)`;
        Setcindex(num);
        if (num == slideCount || num == -slideCount) {
            setTimeout(() => {
                console.log(slides);
                slides.classList.remove(`${styles.animate}`);
                slides.style.transform = `translate(${-(slideWidth) * slideCount}px)`;
                Setcindex(0);
            }, 500);
            setTimeout(() => {
                slides.classList.add(`${styles.animate}`);
            }, 600);
        }
    }

    const Cloning = () => {
        if (SlideGo) {
            SlideGo.current.nextSibling.style.display = 'flex';
            let slides = SlideGo.current.previousSibling;
            let slide = slides.childNodes;
            let slide_cpy = [...slide];
            let slideWidth = slide[1].offsetWidth;
            if (SlideGo.current.attributes[1].value == 0) {
                setSlideCount(slide.length);
                setTimeout(() => {
                    for (let i = 0; i < SlideGo.current.attributes[3].value; i++) {
                        let cloneSlide = slide_cpy[i].cloneNode(true);
                        cloneSlide.classList.add('clone');
                        slides.append(cloneSlide);
                    }

                    for (let i = SlideGo.current.attributes[3].value - 1; i >= 0; i--) {
                        let cloneSlide = slide_cpy[i].cloneNode(true);
                        cloneSlide.classList.add('clone2');
                        slides.prepend(cloneSlide);
                    }
                    updateWidth(slideWidth, slides, slide);
                    setInitailPos(slideWidth, SlideGo.current.attributes[3].value, slides);
                    setInterval(() => {
                        slides.classList.add(`${styles.animate}`);
                    }, 100);
                    setCount(count + 1);
                }, 200);
            }
            else {
                moveSlider(cindex + 1, slides, slideWidth, SlideGo.current.attributes[3].value, SlideGo);
            }
        }
    };

    const shownext = () => {
        if (Hovercontainer1) {
            Hovercontainer1.current.nextSibling.style.display = 'flex';
        }
    };

    const list_default = list_ranking.length === 0 ? <i className={`fas fa-spinner ${styles.spinner}`}></i> : list_ranking.map((li, index) => (<div key={index} className={styles.show_ranking}><img src={`./${li[1]}.png`} alt={li[0]} className={styles.wow} className={styles.rank_poster} /><img src={li[2]} alt="1등" className={styles.rank} /></div>));
    return (
        <div className={`${styles.inner} ${styles.slider_warapper}`}>
            <p>한국 TV 드라마, 로맨스</p>
            <div ref={Hovercontainer1} className={`${styles.ranking_container} ${styles.slides} ${styles.hover_container}`} onMouseEnter={shownext}>
                {list_default}
            </div>
            <i className={`fas fa-chevron-right  ${styles.next}`} count={count} currentindex={cindex} slidecount={slideCount} ref={SlideGo} onClick={Cloning}></i>
            <i className={`fas fa-chevron-right ${styles.before}`}></i>
        </div>
    );
}

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.social_link}>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram-square"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                </div>
                <div className={styles.other_link}>
                    <ul className={styles.link_member}>
                        <li><a href="#">자막 및 음성</a></li>
                        <li><a href="#">음성 지원</a></li>
                        <li><a href="#">고객 센터</a></li>
                        <li><a href="#">기프트 카드</a></li>
                        <li><a href="#">미디어 센터</a></li>
                        <li><a href="#">투자 정보(IR)</a></li>
                        <li><a href="#">입사 정보</a></li>
                        <li><a href="#">이용 약관</a></li>
                        <li><a href="#">개인정보</a></li>
                        <li><a href="#">법적 고지</a></li>
                        <li><a href="#">쿠키 설정</a></li>
                        <li><a href="#">회사 정보</a></li>
                        <li><a href="#">문의하기</a></li>
                    </ul>
                </div>
                <div className={styles.service_button}>
                    <a href="#">
                        <p>서비스 코드</p>
                    </a>
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

export default MainScreen