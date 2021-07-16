import styles from './Main.module.css';
import Moviedetail from './Moviedetail.js';
import { useHistory, Link } from 'react-router-dom';
import { React, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { likeReducer } from '../reducer/reduce.js'

function ListPlay2(props) {

    const [state, setState] = useState('false');
    let boolValue = true;
    const [count, setCount] = useState(0);
    const [cindex, Setcindex] = useState(0);
    const [slideCount, setSlideCount] = useState(0);
    const Hovercontainer = useRef();
    const wowImage = useRef();
    const userMovie = useRef();
    const SlideGo = useRef();
    const list = useSelector(state => state.likeReducer);

    useEffect(() => {
        console.log(list.userLike);
    }, []);

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
                slides.classList.remove(`${styles.animate}`);
                slides.style.transform = `translate(${-(slideWidth) * slideCount}px)`;
                Setcindex(0);
            }, 600);
            setTimeout(() => {
                slides.classList.add(`${styles.animate}`);
            }, 700);
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

    const changeBool = () => {
        console.log('change');
        boolValue = true;
    }

    const list_default = list.userLike.length === 0 ? <i className={`fas fa-spinner ${styles.spinner}`}></i> : list.userLike.map((li, index) => (<div key={index} ref={userMovie} id="parent" className={`${props.name} slide`} onMouseLeave={notDetail}> <img src={li.image} alt={li.title} id="image" className={styles.wow} state='false' ref={wowImage} onMouseEnter={showDetail} /><Moviedetail states={state} parent={wowImage} func={changeBool} titleImg={li.titleImage} image={li.image} modalImg={li.modalImage} alt={li.title} /></div >));

    return (
        <div className={styles.inner}>
            <div ref={Hovercontainer} className={`${props.cname} ${styles.hover_container}`} onMouseEnter={shownext}>
                {list_default}
            </div>
            <i className={`fas fa-chevron-right ${styles.next}`} count={count} currentindex={cindex} slidecount={slideCount} ref={SlideGo} onClick={Cloning}></i>
            <i className={`fas fa-chevron-right ${styles.before}`}></i>
        </div>
    );
}

export default ListPlay2