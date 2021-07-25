import styles from './Main.module.css';
import { React, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function ListPlay1() {

    const [list_ranking, setList_ranking] = useState('');
    const list = useSelector(state => state.likeReducer);

    useEffect(() => {
        console.log(list);
        console.log(list.userLike);
    }, []);

    useEffect(() => {
        const UeList5 = setTimeout(() => {
            setList_ranking([
                {
                    title: '마인',
                    rankImage: 'one',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeJS0OPjiWN7rEmnKMxeUV_ao2eDIW7JOKpTXdEZ1ox39fHU2xqA2khG5G6drBiCaUNW7_EHCc2PFT4EykbYcHhlo31OXnWXsEWGw9p9_EoByb8J26Cm6KFyzIOr2f19hxHo63MEUdT8-Q.jpg?r=f25'
                },
                {
                    title: '이 구역의 미친년',
                    rankImage: 'two',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSMndg5x5A5l2PxtF8XE0uKcbmP9ZQmcKdfluVPC57O3Cj9ly8cYqIZekuNhWxvN9y1f1z2_goyFDQu4bzzdzaNEswDCIMS5bqayUGWDAy1RRASTZnZy7l-q7-fIBMkJNrQ.webp?r=fc2'
                },
                {
                    title: '슬기로운 의사생활+',
                    rankImage: 'three',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbRHSboQgJ71QdbBb5V7ckLtlpbESoxjKhmFoxrPlfcl6tVJ-FV0pwhM7JG-AUBAcnNtO_qz7QrHINA_Oh6PGAYpG5qHNtRVamXqhWwmgIBr2Nw8VqTYBJfIsKlORflDCHGQzE6ol2XHkA.jpg?r=e1d'
                },
                {
                    title: '알고있지만',
                    rankImage: 'four',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABW63CbAEvgjNj5NPw5dtUbNDgOVxtgq-1shDN5Y2cSFJtYnN4u58oIdUW1O6XNnDqTEYXOUEWYA4rtXTDfz-kwhmfBf1QQxw9MS5eRgJLRPMpQsimX0JeyaBZwksO1qIfVmNiJLp_Kz84g.webp?r=19d',
                },
                {
                    title: '결혼작사 이혼 작곡',
                    rankImage: 'five',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZzkhURmI2Nd7EcI363gdEvDg-5FjQfU0hf-J4mWNUSEhf77MPmdADAE-EyHlNc2rPXMu0OyzlZC0EH9I2d_fDqjqbltE6Y1pKTOA6YcyYU5HYGDKH_SZ9ryuyRr81FNhfNxzChJs1_rjA.webp?r=678'
                },
                {
                    title: '내일 지구가 망해버렸으면 좋겠다',
                    rankImage: 'six',
                    image: 'https://occ-0-1009-1361.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeBq5tEwE8-MKPOuyS1B2njnvjw-7DyEhNL5TEKDhJRTyBmOi4-KNQv-W42rxS_OQZoSOl5pEG-Zy6Kk_GWgDGhKw3tHyzcgB_EvTdqreOgNGCZZojCqAMiSrKfbwQ.jpg?r=459'
                }]
            );
        }, 2000);

        return function cleanup() {
            clearTimeout(UeList5);
        }
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

    const list_default = list_ranking.length === 0 ? <i className={`fas fa-spinner ${styles.spinner}`}></i> : list_ranking.map((li, index) => (<div key={index} className={styles.show_ranking}><img src={`../${li.rankImage}.png`} alt={li.title} className={styles.wow} className={styles.rank_poster} /><img src={li.image} alt="1등" className={styles.rank} /></div>));
    return (
        <div className={`${styles.inner} ${styles.slider_warapper}`}>
            <p>오늘 한국의 TOP 10 콘텐츠</p>
            <div ref={Hovercontainer1} className={`${styles.ranking_container} ${styles.slides} ${styles.hover_container}`} onMouseEnter={shownext}>
                {list_default}
            </div>
            <i className={`fas fa-chevron-right  ${styles.next}`} count={count} currentindex={cindex} slidecount={slideCount} ref={SlideGo} onClick={Cloning}></i>
            <i className={`fas fa-chevron-right ${styles.before}`}></i>
        </div>
    );
}

export default ListPlay1