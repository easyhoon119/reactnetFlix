import styles from './Main.module.css';
import Headers from './Header.js'
import Video from './Video.js'
import ListPlay from './ListPlay.js';
import ListPlay1 from './ListPlay1.js';
import ListPlay2 from './ListPlay3.js';
import Footer from './Footer.js';
import Underheader from './Underheader.js';
import { useHistory, Link, useParams } from 'react-router-dom';
import { React, useEffect, useRef, useState } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    Router
} from "react-router-dom";

function MainScreen() {

    const [list, setList] = useState('');
    const [list_kor, setList_kor] = useState('');
    const [list_kor_copys, setList_kor_copys] = useState('');
    const [list_only, setList_only] = useState('');
    const history = useHistory();

    const token = window.localStorage.getItem('token');

    if (token == null) {
        history.push("/login");
    }

    useEffect(() => {

        const UeList1 = setTimeout(() => {
            setList([
                {
                    title: 'Run On',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZzdNnoG93Vq6T7blIphj4jZ86XS3m3ZHwGhtwCJaBvy7w-iuhnGUAMdPIJPx0WOvuJz9Hpnk7y5_utiHlwSZliuCrc.webp?r=77f',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABU_mCR-CG4JXnCCGqjSwSjxF2wBt-sSU0eJVoAs2C_wPyBxEFh0jzz0KkNA4DTwproux-jR0L2TEpOq96VIfiALWJDiNfAv0idQ.webp?r=561',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYsgQsQHE7ObMzKUBRyneFg12Ptwlp4P2sDlwJu5t-g5sOwla4R_RH1RC8iHA4uf0Rkm4b7Zp8YV4DFcWU45J-H2uoZd.webp?r=77f'
                },
                {
                    title: '이구역의 미친x',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcM0eqeI_KHzW9niYOvw2YIIX1z8FJvCqupJzeRIHCfBLE_zxYMZY3u3pF_cdWqwB8ZMPUI9HxZpBIrn3HNbMFdZv8hmTPwRM1Hq_7nRSD9-Gywmh4O4HOP2XVSgSBoZWpxCEMVdnTaNAgCo6AFVc-LKC-BuaDH0tw_xrtQaQJa7I8YvGc4sfOVG8rOG.webp?r=6f5',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSYMI5Dar5q9XanJI5HcrVbWXqCo_YftofI0ShbGlMLEgTtOmQ-ffuUay292m7mGWQD-mm5076y_LEcAG2rpPoe1M2EipDIW2rQ.webp?r=7bc',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWc1vDM8CPidGZsOIJv1Nr13tRlurChFE0m-4q2abA4035HaOHgrB4P3asdi4-nQY4Z7ZaXyj02NPSk-eQQfBKhoj0FCPgjcJI4-MjJQ913FIES9gDghREINZwnywmrUw38.webp?r=804'
                },
                {
                    title: '쿠로코의 농구',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbFFIT36JwEl6U8BN21KrET2I7jtvAVHFV2sRWy74PTOez-6JZrUruxCQTw3dpe7lA30P5barWepvjA6A2FObAbgv28.webp?r=d98',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABRtMCLVFmWjsOHQnuKIGlLr20PPPzAnUNtshZL8SLlCzhaMpLsfb7AB33XDQCkHhZNM7eBq9d8OVuiFzVJM04d7EJWjuyJ70BNE.webp?r=6b4',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVfSGoH9yctbdTi3mKBy56piSwbb4kcd0R3a6guJlFBRVHzUC7xqWWGh4Ns98NH-keunuffAYiT1mfsrpeYKkRj6T7E0.webp?r=d98'
                },
                {
                    title: '암살 교실',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVQFxJkf5yOwDfSppgc5YqFA8mFH3cBj4t5PhTeag2LykV0a2qpR482xmdEBzAbd3UwzT_qj5-Wut-812VjQFI5Ensk.webp?r=ffd',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABS0-GHi1N1mkDxApv1Rz5LUKfFmuFzwRWnqcPxgn_V1uQW-l4lxDmQYtEhloDEUmeIzUjzf1KvhIEWvNtkOfGgobcC5Qc360YNQ.webp?r=03f',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaYmoI9RtNzMlIpNR0lxyJ1k07NnWmuTr-U055eMAERiswim5hsmKSdbhe3w3U9DwX1GpbDWlxGw7ATXlvyP3hzqHeVa.webp?r=4dc'
                },
                {
                    title: '로스쿨',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVgZVbvP3GLkBQuYCKXhpY6ExdybZsHVDnElr3Wyo8azxlIChIOb6NN0rVW47tjClXDd_V0JhAXd2piE3hSanEwWiI4VUzZdA-BJ91z9ZIeJW04I5_J2wcUF8U4VtkeiNg.webp?r=08d',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXJBoicFRBToe91e7E9Crni2Ci6xhKV7sEJry97xJe435_hURKCgPY0he5MFz0taD2RCDezbE1onIr5tZOAwX8DfY88fzEX2uqg.webp?r=808',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdlYN15DgFOr7kY_h4Hl2xb3lqtL3eQ-RAPYlodxbEOXT_bjVgd9oAmiehEw3E_l7K3qlqyAHkesX9V6YzJhQNFf0yqL.webp?r=08d'
                },
                {
                    title: '국가부도의 날',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTOX5KFKrWgovrFPrRTqstMVOvo-vrml_ISPFc8b9TYKXcU8tVWbNajpllEpfXfglrgAC9vm-qrFKA1AdqviXqCTQAs.webp?r=f11',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfA0MQcjKTLbdQURZzDXkzGn1w2EhzjFCm9TOCDpUhujU9HrPf87mTqs7gW1g42aZ_dUUyLD8Rl_sLUR6M2_zKiWnTk_lYhqeX4.webp?r=7af',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRGrWyadoVuhgCMIxo0AjM8hDDaIx3WhQOVK0wItJiJAkv0iFt-TuSTXhF9uD_JyLVcnHrmCATYhqzsLvkPZPzXRaQ-I.webp?r=f11'
                },
                {
                    title: '선배 그 립스틱 바르지 마요',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfQvKA6i3xUWGGfTGZhdt81mPnHbagEkIrofL-OKuHUUdZuBcH-Q6Kq6bG91Har-liismMXxBIzRwnV0V8SXrmz3GJU.webp?r=69b',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXbL2_BuU1Map3bssIzlUPLY-F4iFGshyuuABBjIzJdEp9NbryoBzROzkgUnXaiXsjylb05fk9kkx8ksBpJJy3T4rRyu102R_mg.webp?r=a15',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUc45q1NpQqn3UKjRef_ze_dvJVOq3SAWUinPs5wwwMtAf52Ax11rAQKfyRb6Smo07if9qIWQKIiQcli-pD42bZ4uB3I.webp?r=69b'
                }]
            );
        }, 2000);

        const UeList2 = setTimeout(() => {
            setList_kor([
                {
                    title: '알고 있지만',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW3ETp3kOTb_LYmZG79hDmiEh3peHS8kWbAsj7z91qYVX6-6i4P7ijjBvRVORMw9zv7I86DzaIsqz_6oIIbo8AnEcnaDhs1YlHgcqNT-gyeHPCmdjzeLee0UAj16He_LEE9nxgK0asiKbb9xhiWMhSs-094YCjx3oXDtzn-ZrlgXpCpuEfFpj5d93eMV.webp?r=e06',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSmoibLNOiXgx1cjoVMcJs711ItyhUTnlYORfR3LxFUITeFDHf4zpZwIHtOrKgnlNTgpKtmQdID1-H_UJBGyO0XO8vzdoQ0VwSg.webp?r=aca',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXgW1_5jgD5t7K6gqD85VYNHUjxzdNHYTaN5PGGl-dGjQjghk9DxONEetXCMwBfvXVTbvLekDg1RtmxS3V74WuCRnPuv8Pwxf3mjwDCD4_pv6-0QfeEZX5GmkjUZMiuT6ZKJfQMjFs25locmDG99rH3GxzA9w8btJOzIX-lOw5Cq6ELVgdUGpUYc2FPANA.webp?r=68b'
                },
                {
                    title: '무브 투 헤븐',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfKCoxB0kw9imN7gtZG__BBGxryo3fjVpByvfnOdBK4CDhfDRrHVrqpbruNjAL5YF8H-4glU4Jlb-GxoNwDHXCsdhPIOjPuM4Rv1mH8NFfd2zzlYcxq65PoL1YjoK-b09x9K_R7o0JIz5bHUT5OeJiflTJ4Dm0K4FvBPVhZhr0_YE4rZ4NxkHFc.jpg?r=f31',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcSqMEA-yMd-SWaVKyKVXCtZFErTZ__UviWdm3PhXrGOJu3yqPuy7XM4JOnsYgD-CGC0jJ89qrpGx8SVNTbZOeUPZpX4XMwPoMTRlQPXSh1ViVCXnc4xFoUk3bTzlFB3-W3GFxTfsJdvLVvzu5BGws33eQbMU-pdDMOcSHXH5i7q.webp?r=82e',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVkb9QY5H-s-ZvwtGjriavjraGgwLVL9xoguywOg_DuzAS5Dsvr2XaK8nSSEehZowBk9eRVdHji6LvJkmKUZWBeXQ-nUkWbGJZhjLuN5O0Z5c_FJKCbPhRGbIC8cNA.jpg?r=6a8'
                },
                {
                    title: '뽕숭아 학당',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZBx3u-_aSLzxU3uuMD57_TuQQxkARTqwd7BPZwD3d-jY37728TX8Rh7bUqIpp4IsnWYNPry6RWSgg-EfrGYioA9cVq1P7EPGuFDKAvJXrBM-A0c3zJSC02f-ykLxp9yOA.webp?r=6fb',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSl7HF3Xlx_cVZA9o85dBOJQg4aSzcarSBCfCEiF7aHm-uJXMpyGWb44aDaAP3E9zYVHHOYyK-M-q9Js0yGMXvbcN3fDta8j5F4.webp?r=c34',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQUhUXmVfyjScDou9YO0IWdCISKCUvifCjTDlBdQBRgNVztiL-k0pApQMpTW5l0oRxqYtLj5hdODOvPrwp6tK8kP73EpSUgy5FxqInPvMSVfPG9IipKQzMJUIMI8ObMq6I0.webp?r=6fb'
                },
                {
                    title: '내일 지구가 망해버렸으면 좋겠어',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa9diV550oN1jZlf5QyFePLFpv2RYNfaj7hCdiSHlhSOmInHJWKnY68QxsdEwhgYuesuPDiI9WmCpjGpIW5PugqpZhOybNrqo_CCcoito5p8c8bfEpzlvCn8p32-9pNosOhrTgjq43P81QT93aOO-GI02IiS5Hv7UBZCJytbok33rfvJz9MJhOU.jpg?r=015',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaineCdyE0C9wS5hYUUgLG6xaURb8QDBh_W58iZw2nfbxljPIDQ8lLW_UWT6aEfFqp8dNIvwbpP7UlaaeWVFJrXAsW21VKK4yBsAB-buppzkXDILUtGLSpAct4135HqeYvdZocjs_CWUi5cDvimEjVSC1I82o6snHbz3dbVp18UF.webp?r=86e',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRp4YjT4sPoa7JKtvXsp4ZXIZAzc8C6-K6frSaJrJJcnZMhf3a4hcmKjmIci-JL3s35X4gLf2sZTUzDNufma-9jxH8M4rQdtsNkF6oXPC-b-IJtf9NsMKCK6g8U4Cg.jpg?r=015'
                },
                {
                    title: '라켓 소년단',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZJivj0P6_xhBqvdchAUnKbDZZDy6LXLAQuxulwtJe1cahgRtxt8iZR3xevO4Ql8jkndCBZwoIhHHmPPBrVzj7ef3GFqRo_cJOSgrZFG2z55UBdsi7GEqbtZXt2gQuHRSQ.webp?r=3d1',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABf-psR_B9fYY3cRhntjUR_HkFMKf0up_SoaM2nhz566B_ckKEjpmUOOspYvKhNGb1n6kFoKRqUx3R_KSLcEw3ruWsOcYTz2J7Xk.webp?r=d05',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVrnXn6bzBpY7dXYTs2u6AgmEEe2iXOiIPBeKABumR4_1isEqjdK5A4gYwxQOo4i8mRY_gjy6BxwMnAeFzehELhk_LYAiFwqQO4D4eWcRyARfPOntcQnFINiBCfOtg145JkMO51PcNJAkaGb7_bM6gRaX6HqMUOGRj2jJo3k9hK-mib1lSyY8-nFhdaQGQ.webp?r=59a'
                },
                {
                    title: '마인',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbp2ELN4reATPUQ6rhNK_VFynib-WrhQ4Z17O65wOq3eB41WM0Gx4plPPNGPY0WqvaJ521fLf41PH950cinO35azfsdnA8JjFuovSPPVYMq0nfACKYPxpgESGKRkx3Eqk1uVoSeCBIzzi_yqSdP03iDbO-N40KPFEsTRIT2sIjMS_QV6HsyQq3of3LxS.webp?r=d75',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABdBRrFRPwzZxNPqC6UYA9PTMiSfoUGw1qbHTIwa36VnxqIoyrvGnY9-rNegnqrcpteQsGf8U8KM7ri-5uLZ8R_m9OEGftQ3dkFE.webp?r=022',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRlcMWUBUPaEmpsJSiy1Sz9nh-UWtupIIHboDcwE96XoJc5c3XdVasud4hsh9JcUDfHmKFBWcuHwcUy_4H6CUnBvaVlBlp3q9rVz2adwFw1-f13KbWUoGeaqmBxAm8aJ-RM.webp?r=bdf'
                },
                {
                    title: '나의 아저씨',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABab39TGFZ8HVjv4NZ3I9LeI4V0J53ORNevmoYkvqrd9B57HPGhRr6_tjU8wki24b9VUWKqAB6RRUesQ4uIO-9kskIys.webp?r=a6c',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABf-YfZdGIIlx5VspLlVAVM6sXsSoYRDkCgiksRYeLo4olReziOx5SHvWMXCwnRZEPGjp2BoonW7TRzjCp1X85se9IGdqS5BXzvI.webp?r=4a6',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABforY4NVWgKCVixmBOjvCyKXiKFJ19t5Q3bEp8gCrJTYUsE9bu67j_DNvOjFEMstins2lFR5Z1e0AB7TrJf5Uzpjr0UP.webp?r=a6c'
                },
                {
                    title: '18 어게인',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUkoVoAiF1gO3GirtvHlwVNYGXo0QSjj6HeWtvmspY17Wc03x3yaqeb6SGioT4iKXwFd1qlgv0If3qBDcqAgng_tzDU.webp?r=be3',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABf0PVsCoHpLLL23McOztiO8qHtxTyGAbJ1ArWYwREeHM_ko0YW60YonTm-5Nh0wDHE5KJdN2bqNQ2N-5cwo-HzYj6RirXjwh9kk.webp?r=abf',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTCF4g_ABy4u2-TAgFuMmEjwQy8DEolEBqsQQcHy1ccUZ3E6E1JtPUgf_lo1nMvYbYZAbHQRA9rfvKDtS-3a4Yf6EkbD.webp?r=be3'
                }]
            );
        }, 2000);

        const UeList3 = setTimeout(() => {
            setList_kor_copys([
                {
                    title: '알고 있지만',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW3ETp3kOTb_LYmZG79hDmiEh3peHS8kWbAsj7z91qYVX6-6i4P7ijjBvRVORMw9zv7I86DzaIsqz_6oIIbo8AnEcnaDhs1YlHgcqNT-gyeHPCmdjzeLee0UAj16He_LEE9nxgK0asiKbb9xhiWMhSs-094YCjx3oXDtzn-ZrlgXpCpuEfFpj5d93eMV.webp?r=e06',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSmoibLNOiXgx1cjoVMcJs711ItyhUTnlYORfR3LxFUITeFDHf4zpZwIHtOrKgnlNTgpKtmQdID1-H_UJBGyO0XO8vzdoQ0VwSg.webp?r=aca',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXgW1_5jgD5t7K6gqD85VYNHUjxzdNHYTaN5PGGl-dGjQjghk9DxONEetXCMwBfvXVTbvLekDg1RtmxS3V74WuCRnPuv8Pwxf3mjwDCD4_pv6-0QfeEZX5GmkjUZMiuT6ZKJfQMjFs25locmDG99rH3GxzA9w8btJOzIX-lOw5Cq6ELVgdUGpUYc2FPANA.webp?r=68b'
                },
                {
                    title: '무브 투 헤븐',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfKCoxB0kw9imN7gtZG__BBGxryo3fjVpByvfnOdBK4CDhfDRrHVrqpbruNjAL5YF8H-4glU4Jlb-GxoNwDHXCsdhPIOjPuM4Rv1mH8NFfd2zzlYcxq65PoL1YjoK-b09x9K_R7o0JIz5bHUT5OeJiflTJ4Dm0K4FvBPVhZhr0_YE4rZ4NxkHFc.jpg?r=f31',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcSqMEA-yMd-SWaVKyKVXCtZFErTZ__UviWdm3PhXrGOJu3yqPuy7XM4JOnsYgD-CGC0jJ89qrpGx8SVNTbZOeUPZpX4XMwPoMTRlQPXSh1ViVCXnc4xFoUk3bTzlFB3-W3GFxTfsJdvLVvzu5BGws33eQbMU-pdDMOcSHXH5i7q.webp?r=82e',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVkb9QY5H-s-ZvwtGjriavjraGgwLVL9xoguywOg_DuzAS5Dsvr2XaK8nSSEehZowBk9eRVdHji6LvJkmKUZWBeXQ-nUkWbGJZhjLuN5O0Z5c_FJKCbPhRGbIC8cNA.jpg?r=6a8'
                },
                {
                    title: '뽕숭아 학당',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZBx3u-_aSLzxU3uuMD57_TuQQxkARTqwd7BPZwD3d-jY37728TX8Rh7bUqIpp4IsnWYNPry6RWSgg-EfrGYioA9cVq1P7EPGuFDKAvJXrBM-A0c3zJSC02f-ykLxp9yOA.webp?r=6fb',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSl7HF3Xlx_cVZA9o85dBOJQg4aSzcarSBCfCEiF7aHm-uJXMpyGWb44aDaAP3E9zYVHHOYyK-M-q9Js0yGMXvbcN3fDta8j5F4.webp?r=c34',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQUhUXmVfyjScDou9YO0IWdCISKCUvifCjTDlBdQBRgNVztiL-k0pApQMpTW5l0oRxqYtLj5hdODOvPrwp6tK8kP73EpSUgy5FxqInPvMSVfPG9IipKQzMJUIMI8ObMq6I0.webp?r=6fb'
                },
                {
                    title: '내일 지구가 망해버렸으면 좋겠어',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa9diV550oN1jZlf5QyFePLFpv2RYNfaj7hCdiSHlhSOmInHJWKnY68QxsdEwhgYuesuPDiI9WmCpjGpIW5PugqpZhOybNrqo_CCcoito5p8c8bfEpzlvCn8p32-9pNosOhrTgjq43P81QT93aOO-GI02IiS5Hv7UBZCJytbok33rfvJz9MJhOU.jpg?r=015',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaineCdyE0C9wS5hYUUgLG6xaURb8QDBh_W58iZw2nfbxljPIDQ8lLW_UWT6aEfFqp8dNIvwbpP7UlaaeWVFJrXAsW21VKK4yBsAB-buppzkXDILUtGLSpAct4135HqeYvdZocjs_CWUi5cDvimEjVSC1I82o6snHbz3dbVp18UF.webp?r=86e',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRp4YjT4sPoa7JKtvXsp4ZXIZAzc8C6-K6frSaJrJJcnZMhf3a4hcmKjmIci-JL3s35X4gLf2sZTUzDNufma-9jxH8M4rQdtsNkF6oXPC-b-IJtf9NsMKCK6g8U4Cg.jpg?r=015'
                },
                {
                    title: '라켓 소년단',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZJivj0P6_xhBqvdchAUnKbDZZDy6LXLAQuxulwtJe1cahgRtxt8iZR3xevO4Ql8jkndCBZwoIhHHmPPBrVzj7ef3GFqRo_cJOSgrZFG2z55UBdsi7GEqbtZXt2gQuHRSQ.webp?r=3d1',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABf-psR_B9fYY3cRhntjUR_HkFMKf0up_SoaM2nhz566B_ckKEjpmUOOspYvKhNGb1n6kFoKRqUx3R_KSLcEw3ruWsOcYTz2J7Xk.webp?r=d05',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVrnXn6bzBpY7dXYTs2u6AgmEEe2iXOiIPBeKABumR4_1isEqjdK5A4gYwxQOo4i8mRY_gjy6BxwMnAeFzehELhk_LYAiFwqQO4D4eWcRyARfPOntcQnFINiBCfOtg145JkMO51PcNJAkaGb7_bM6gRaX6HqMUOGRj2jJo3k9hK-mib1lSyY8-nFhdaQGQ.webp?r=59a'
                },
                {
                    title: '마인',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbp2ELN4reATPUQ6rhNK_VFynib-WrhQ4Z17O65wOq3eB41WM0Gx4plPPNGPY0WqvaJ521fLf41PH950cinO35azfsdnA8JjFuovSPPVYMq0nfACKYPxpgESGKRkx3Eqk1uVoSeCBIzzi_yqSdP03iDbO-N40KPFEsTRIT2sIjMS_QV6HsyQq3of3LxS.webp?r=d75',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABdBRrFRPwzZxNPqC6UYA9PTMiSfoUGw1qbHTIwa36VnxqIoyrvGnY9-rNegnqrcpteQsGf8U8KM7ri-5uLZ8R_m9OEGftQ3dkFE.webp?r=022',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRlcMWUBUPaEmpsJSiy1Sz9nh-UWtupIIHboDcwE96XoJc5c3XdVasud4hsh9JcUDfHmKFBWcuHwcUy_4H6CUnBvaVlBlp3q9rVz2adwFw1-f13KbWUoGeaqmBxAm8aJ-RM.webp?r=bdf'
                },
                {
                    title: '나의 아저씨',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABab39TGFZ8HVjv4NZ3I9LeI4V0J53ORNevmoYkvqrd9B57HPGhRr6_tjU8wki24b9VUWKqAB6RRUesQ4uIO-9kskIys.webp?r=a6c',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABf-YfZdGIIlx5VspLlVAVM6sXsSoYRDkCgiksRYeLo4olReziOx5SHvWMXCwnRZEPGjp2BoonW7TRzjCp1X85se9IGdqS5BXzvI.webp?r=4a6',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABforY4NVWgKCVixmBOjvCyKXiKFJ19t5Q3bEp8gCrJTYUsE9bu67j_DNvOjFEMstins2lFR5Z1e0AB7TrJf5Uzpjr0UP.webp?r=a6c'
                },
                {
                    title: '18 어게인',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUkoVoAiF1gO3GirtvHlwVNYGXo0QSjj6HeWtvmspY17Wc03x3yaqeb6SGioT4iKXwFd1qlgv0If3qBDcqAgng_tzDU.webp?r=be3',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABf0PVsCoHpLLL23McOztiO8qHtxTyGAbJ1ArWYwREeHM_ko0YW60YonTm-5Nh0wDHE5KJdN2bqNQ2N-5cwo-HzYj6RirXjwh9kk.webp?r=abf',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTCF4g_ABy4u2-TAgFuMmEjwQy8DEolEBqsQQcHy1ccUZ3E6E1JtPUgf_lo1nMvYbYZAbHQRA9rfvKDtS-3a4Yf6EkbD.webp?r=be3'
                }].reverse());
        }, 2000);

        const UeList4 = setTimeout(() => {
            setList_only([
                {
                    title: '투 핫',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABV1N6uqK1pqLhex6yA2rupxxYZR448aIa8-OLj4rDzbcHgZCZobPAEycSvsB3gMXl7VyAhliRiSrTpFtX-9gXYaxnji-88aH4NF_TdbdR32iZt78zMSbVcpZLn4YpWrci5jzmZC7TbLv4dtxGzcAWGFXsyO8vApGLT91fywRhxw7xzXhfATMsqh6nJH5nfGK55q2wfzl.webp?r=540',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUywgFPw8wJXL8gdMn-h7poR_GnLulvp__UrOYWBhjWyT2FdK_hlhrpEGdM7ST-d6fM8oysVCagbvl9swaj8Tsl1454PIfPIOQ3gebJ-fWePZXgtL8rF7RtZcDEizVEYfzHD11hYuDA27yq8MrRI42_S8Y_O4h8yWNYOFTpuA_EL.webp?r=44f',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeHzz_RIV-ihsc4m4isXkT5u14AXzlFcqmwqXGlmPYognWyec7bEiwl2TBdCKEwZFxYwipXE3PvQB_R0rB5e6m7TH2m34XgLVmz0rGO0n6gOHhHYQeA5Etz6BuJNCWy8DEjmx28GsWSpntNT6d1MTdpMkOvX3oM.jpg?r=3be'
                },
                {
                    title: '내일 지구가 망해버렸으면 좋겠다',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABfgzVfyB2pri2rWHMxOcPVs9isV56cEX4R01L-Og55TLecfiUeoqOD5Udmn_zEMlK6EmnxGaVLL_y5EUCwpcSAUO3EqFyzV1sga0Yn7sShpP8mSHOxMkJ1CKRh-g96g14j5PVwx9XQHR5tgS6stF7qUNGxnaBqP8Sa-IvKcXQbCXgSUhpqDOCqfKRrqd23RQItyKo49bgA7Ip3LlK_o4vOMfxJJsf0S0-LEZg162n3I6t2kYREjHd7fOmnLBiBgjSh8.webp?r=219',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaineCdyE0C9wS5hYUUgLG6xaURb8QDBh_W58iZw2nfbxljPIDQ8lLW_UWT6aEfFqp8dNIvwbpP7UlaaeWVFJrXAsW21VKK4yBsAB-buppzkXDILUtGLSpAct4135HqeYvdZocjs_CWUi5cDvimEjVSC1I82o6snHbz3dbVp18UF.webp?r=86e',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRp4YjT4sPoa7JKtvXsp4ZXIZAzc8C6-K6frSaJrJJcnZMhf3a4hcmKjmIci-JL3s35X4gLf2sZTUzDNufma-9jxH8M4rQdtsNkF6oXPC-b-IJtf9NsMKCK6g8U4Cg.jpg?r=015'
                },
                {
                    title: '무브 투 헤븐',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABQcQ8l9BJUygegjtBUktJrZSz1h8L0_F7m4mI5hnJaV-bNZHa99a5JPghGVN2u_U9-5xC6ldbKuTVQErMC0C3F9qMCZ9pWwn1uidc5VuUrXGYG-GB60Cvb_UMNglKojzftuvSX14meLmAm6lCS02ThueEsS0p7klYyCoN2iHu4jPdLZ6do7qdPWKuidyQJAUJFL-VJvBdhzyyUB9H8zTjpyhA6lJBho1rX1BIA3FFOSsMfQ14GcV7Ywu97NPn_9aqmE.webp?r=3d9',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcSqMEA-yMd-SWaVKyKVXCtZFErTZ__UviWdm3PhXrGOJu3yqPuy7XM4JOnsYgD-CGC0jJ89qrpGx8SVNTbZOeUPZpX4XMwPoMTRlQPXSh1ViVCXnc4xFoUk3bTzlFB3-W3GFxTfsJdvLVvzu5BGws33eQbMU-pdDMOcSHXH5i7q.webp?r=82e',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVkb9QY5H-s-ZvwtGjriavjraGgwLVL9xoguywOg_DuzAS5Dsvr2XaK8nSSEehZowBk9eRVdHji6LvJkmKUZWBeXQ-nUkWbGJZhjLuN5O0Z5c_FJKCbPhRGbIC8cNA.jpg?r=6a8'
                },
                {
                    title: '그녀의 이름은 난노',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABXnE3oCuXQc2hoWJ2fK6_Izium_uDm8LTVWNct_M-XPTvkhoR1A5wG2PinKHIWlDdjW8KWnbvSTKlCxQ9id5NGmySCbToQhk9Ko4cisCMoj-RrBetsxrIYmNVIi9B-blOrAdttOQ-bEgdHSkng6iMiFMdir0qoN33Hi_NSxV-1NaSGis8pBEQR3u_tNl-44QMuyIA8z0dTVMLHJunBPVkqysiDXjtYPz8QiVpTarSvat0nDIfqXKEY1c_luvlTKaHJ0.webp?r=218',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYby__-N5zKddGzZCtbSxi4sPE4WAX8K7OOLVbV4zv2bpj2C8OcyWt_pXRsWEIexTJzXoVgleWS1IFFLtC8nWqycRCKY4Ssqs-wLr2JxGVVb-aUCsML3rvspnTN9getm82tuQeRVrQtRUplqUse8LNrCkQbV48kFx6lf2ELjoPIn.webp?r=15f',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRxn7d8XqNfPw5uk1yhVrd1ODNSDW3bkEKl_g5YMA3iUrPhT8uzdBlP423lAG17EcnLL0iZQ3YDL89X8yyA0BjnopdWTX0pEzi-kCtsAd6z3qLzGnrj3-_wfFB4Ptw.jpg?r=bc9'
                },
                {
                    title: '스위트 홈',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABWx8jMD9bfeWu_vJsXHN_jfDzYkMTmQ6ChfPzkLxSFOWwd36DsaFl6J1Zx2PFyLZk13UUYygUBwFm0RcLxms0wapMW3spc2wZZxBrAW1XHLZtvOVG5RTJo_lnDcT5K5Y_IoUNQydrPjSoryvrzRa3sxOu4H2aNQMUMpdAmgDtTwc6TKA_DFXMQ6TquahGNaGz0bovJef.webp?r=55d',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABTlCEhwCtLkMQa1yqjPYvcSXOD3UgF24S92ATtznPohBzFsth5b6-64aZQ7FzJe-5cMj6kJEiSaiyZxuf8qbrx9sYvT4lTVTHZMmS1owchv5hN9wu4lzT8FiIovFl3qFDw5D5MB963cdgJeZUOHK3Kb1icsBR2n5okDBt_Dl1vMB.webp?r=c24',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeaqB2zplxDw4Q2uBnowdK9mokkafio3MYwiCk8ykyeXTYsHg7s9wGXqoJc0_LcBgVvOPT_rPjAdMhaE20mfKSdaeS8kA7hk3aZNV1uknmubGj97j7mPTkkVewQI1w.jpg?r=a95'
                },
                {
                    title: '새콤달콤',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABWx8jMD9bfeWu_vJsXHN_jfDzYkMTmQ6ChfPzkLxSFOWwd36DsaFl6J1Zx2PFyLZk13UUYygUBwFm0RcLxms0wapMW3spc2wZZxBrAW1XHLZtvOVG5RTJo_lnDcT5K5Y_IoUNQydrPjSoryvrzRa3sxOu4H2aNQMUMpdAmgDtTwc6TKA_DFXMQ6TquahGNaGz0bovJef.webp?r=55d',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABaFVCx6zhLN2NZofos39ihskts_0q-cDPMRlF4dyjR4Yf71aKIKIMSzSmI0Myj0Qo4OM-lGQR61LKqC0N_g4XCe2jcyiBnaYaOcRBCyhaPs_CBlDSYtrRBPmzhYV-NdZB9lonDpS8AVD_rmSLrdG7tbWN6X4oYs-7CAxSUbGNVjH.webp?r=8d6',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXYyuwGcl5LhKHSpKUDYBM7hGESXQ9NCLvYAENODH55otsEZxm-9XNZ2M-byEb13ky1vQsIFwUMA6luRCI4jK420P1T-sI30F959fRS7W2p23ebOA5E5CgELefiAew.jpg?r=408'
                },
                {
                    title: '좋아하면 울리는',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABeVGb5mrvrs4ZzA2sEOATRC1D58fiG2SOZJhZV-LtbiR1bZk6TujMPXNO8MSIweHgP5NZ-QTz3xwKt5W-NheYTD07ay2X6nZCYoOSua1LiAD4RkDvb_-ONrQN-VaGsqZ-nVvu_B4vcHE4DBYW81DnBMPNLmoMy3AVtZkOIpeTQXBARjRkNFBr1YyO5MNyP138iDTaZJO.webp?r=00b',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABf2KuOLYvCA8ZctYlCbwe-wvuYjMhhxAWrl1ULZVkFm1q3Npbdcm6t0Kp6qPe-PZM3lLBYBqKL9LUxSz8vLAs-9CJHeVSYIpJnA7TwWt1_0G60764vxN2J9-DDv1eUsw5NACZkEjmju1YCkd3dbBjSauZfB1w_-7OOaQHF2--ocm.webp?r=94c',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfFrEvqQ0qQmlz6kCwvCzm-C3_Rf2cz5ZJGxoOzSqVy_eG4k_hlKVvTyGdvveMq74Effk9dAlzN_E-k8_zz4KzLmY_b9U2I40BZX7Sq0o0PRhLbSp6qpNQ5GjmLzoA.jpg?r=7f9'
                },
                {
                    title: '엘리트 들',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABa6FWrsgvwLjEtCdTC2TMc9xPdQl3M5uQpDnLGr1jb2loOUagylVoqHFcr1yq8FmiMPPTUvzMvLVRBjo5waPT9R446qWfM8_9b14jCMO0z1wG0UG30kbXCApYvwfzU_oICbCSyWIcr6hjC_bIkTIOaxyqIT25dQrOKyO_PmJp-VzqACC5YBuatM0wGeEgr50tMl-dgJHOcZk6hFnD3XxfwOiikOKdegzblM-nTxY-g.webp?r=b65',
                    titleImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZYP0nkQaX5-ulzvYR6FHcHYyeIwbRau9aR6CW0SYafy7Wsy4Q2jwfAHVID8HAIy9Fra2o0vIGkZcz6e6cuvfJWkXmF-6T_khyvxMdz4cQb025-yAeam65wpPIZ-s8Ucr5yOcMWeI-xVH8NMDjyZWXbe65PD11uqV5WmnReIyYIk.webp?r=0cf',
                    modalImage: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd9wZ0ogzyZDMfF3wAcuPe1-pwxPITc82L3FIEldA9nYhHVHPgn_Ec3Ur_L3O38mt3EfG6K7Fi1t-znwX_uXpcLy2eKL-yosP0K1Q6pp9QMda7Z-ROboH3Avu9_1YBig-wbhz_4Z7Rxl1q-O-Ce4ok2gxlHXC74.jpg?r=c9c'
                }]
            );
        }, 2000);

        return function cleanup() {
            clearTimeout(UeList1);
            clearTimeout(UeList2);
            clearTimeout(UeList3);
            clearTimeout(UeList4);
        };
    }, []);

    return (
        <div className="MainScreen">
            <Headers />
            <Route path="/main" exact>
                <Video explain="천상천하 유아독존! 세상 혼자 잘난 요괴 손오공과 요괴 중의 요괴 우마왕이 맞붙는다. 여기에 요괴를 보는 여인 삼장까지. 운명을 걸어라, 암흑의 세상에서 빛을 찾아라!" image="https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABe7ZPM_mVdLIUY5AdG-9P3H-ZAmxKCUnr31w08rxTbQziSXWuxv252kn86xKtNnPkMOdbF9Z63xKi5dbx8gy7X0yxZeRovwXg_b0.webp?r=281" poster="https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTx8ZUPqCWCUruMophPXJc6ELYsiGcmFiqmgnaofd6Ul6kAJgMfooJS0eQ15Z5n-nCfWzupFBd2p4xlYJ8Cg-RMmvbqB.webp?r=1e6" yego="../queens.mp4" />
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
            </Route>
            <Route path="/main/tvProgram" exact>
                <Underheader title="TV 프로그램" />
                <Video explain="조선 시대에도 ‘엽기적인 그녀’가 있었다? 공주 신분에 월담과 외박을 일삼고 욱하는 성격에 불의를 보면 주먹질은 기본. 그런 그녀의 엽기적 행각에 걸려든 남자가 있었으니 까칠한 도성 남자. 두 사람의 엽기발랄 연애담이 시작된다." image="https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABY7kEq7lHsUYd6zxKtXmTY8X6lVOtpiShwMqxNvM5meYg84HJWV6PcsslDjXh2LffNDGG1Yi09URjD2HecEzWFUICOxAqpm6eyGp.webp?r=e5d" poster="https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfHTrcaaVD3OJcQOyY9VPHmAVw9tiAc-Ensj-Tut-_-y9GPXSm_5ZTaLrxIAoccdKFpqsp0RDrjfb1vtNJxfL3DNJOeq.webp?r=8b8" yego="../move.mp4" />
                <div className={styles.user_play_data}>
                    <ListPlay list={list} name={styles.user_movie} cname={styles.user_container} title="지훈 님이 시청 중인 콘텐츠" />
                    <ListPlay1 />
                    <ListPlay list={list_kor_copys} name={styles.user_movie} cname={styles.hot_container} title="지금 뜨는 콘텐츠" />
                    <ListPlay list={list_kor} name={styles.user_movie} cname={styles.kor_container} title="한국 드라마 & 버라이어티" />
                    <ListPlay list={list_only} name={styles.only_movie} cname={styles.only_container} title="오직 넷플릭스에서" />
                    <ListPlay list={list_kor} name={styles.user_movie} cname={styles.replay_container} title="다시보기 추천 콘텐츠" />
                    <ListPlay list={list_kor_copys} name={styles.user_movie} cname={styles.korjam_container} title="한국 TV 드라마 로맨스" />
                    <ListPlay list={list_kor} name={styles.user_movie} cname={styles.ani_container} title="애니메이션 시리즈" />
                    <ListPlay list={list_kor_copys} name={styles.user_movie} cname={styles.komovie_container} title="한국 영화" />
                </div>
                <Footer />
            </Route>
            <Route path="/main/movie" exact>
                <Underheader title="영화" />
                <Video explain="평범한 학생으로 돌아간 피터 파커, 세상을 위협하는 벌처의 등장에 몸이 근질근질! 애 취급은 그만. 거미줄 좍좍 뽑아내는 스파이더맨의 실력을 보여주겠어. 덤벼라, 악당아!" image="https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVZw3nHzSxyUGQU-6G3KIerLKTlNoCXzCaE4qV3ClJDxpZY-FK695RNtHF1CZjMnNelVYEn4sMEkuOI8Xz_15JH3RNRytY6eaya5.webp?r=441" poster="https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWtaZRiSD46UgDZTmEYUZ_yD7U65gzeB0moFMz0l-KI3GhvnuLTLwgbdCn_yUQsMuqup_xWBqnYeP9T5TXG_Us2Ct-El.webp?r=c3d" yego="../move.mp4" />
                <div className={styles.user_play_data}>
                    <ListPlay list={list} name={styles.user_movie} cname={styles.user_container} title="보고 또 봐도 좋은 명작" />
                    <ListPlay list={list_kor_copys} name={styles.user_movie} cname={styles.hot_container} title="지금 뜨는 콘텐츠" />
                    <ListPlay list={list_only} name={styles.only_movie} cname={styles.only_container} title="오직 넷플릭스에서" />
                    <ListPlay list={list_kor} name={styles.user_movie} cname={styles.kor_container} title="우정에 관한 영화" />
                    <ListPlay1 />
                    <ListPlay list={list_kor} name={styles.user_movie} cname={styles.replay_container} title="다시보기 추천 콘텐츠" />
                    <ListPlay list={list_kor_copys} name={styles.user_movie} cname={styles.korjam_container} title="한국 TV 드라마 로맨스" />
                    <ListPlay list={list_kor} name={styles.user_movie} cname={styles.ani_container} title="애니메이션 시리즈" />
                    <ListPlay list={list_kor_copys} name={styles.user_movie} cname={styles.komovie_container} title="한국 영화" />
                </div>
                <Footer />
            </Route>
            <Route path="/main/hotContent" exact>
                <div className={`${styles.user_play_data} ${styles.hotcontent}`}>
                    <ListPlay1 />
                    <ListPlay list={list} name={styles.user_movie} cname={styles.user_container} title="기다림이 아깝지 않은 콘텐츠" />
                    <ListPlay list={list_kor_copys} name={styles.user_movie} cname={styles.hot_container} title="넷플릭스의 새로운 콘텐츠" />
                    <ListPlay list={list_kor} name={styles.user_movie} cname={styles.kor_container} title="이번주 공개 콘텐츠" />
                    <ListPlay list={list_kor_copys} name={styles.user_movie} cname={styles.korjam_container} title="다음주 공개 콘텐츠" />
                    <ListPlay list={list_kor} name={styles.user_movie} cname={styles.ani_container} title="애니메이션 시리즈" />
                    <ListPlay list={list_kor_copys} name={styles.user_movie} cname={styles.komovie_container} title="한국 영화" />
                </div>
                <Footer hot={styles.hotFoot} />
            </Route>
            <Route path="/main/myContent" exact>
                <Underheader title="내가 찜한 콘텐츠" />
                <div className={`${styles.user_play_data} ${styles.mycontent}`}>
                    <ListPlay2 name={styles.user_movie} cname={styles.user_container} />
                </div>
                <Footer hot={styles.myFoot} />
            </Route>
        </div>
    );
}

export default MainScreen