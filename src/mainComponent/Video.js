import styles from './Main.module.css';
import { React, useEffect, useRef, useState } from 'react';

function Video(props) {

    const yegoVideo = useRef();
    const restart = useRef();
    const sound_on = useRef();
    const muted = useRef();

    useEffect(() => {
        const yegoPlay = setTimeout(() => {
            if (yegoVideo.current) {
                console.log(yegoVideo.current);
                yegoVideo.current.load();
                yegoVideo.current.currentTime = 0;
                yegoVideo.current.play();
                restart.current.style.display = 'none';
                sound_on.current.style.display = 'block';
                muted.current.style.display = 'none';
            }
        }, 2000);

        return function cleanup() {
            clearTimeout(yegoPlay);
        };
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
            yegoVideo.current.poster = props.poster;
            yegoVideo.current.src = '../queens.mp4';
            restart.current.style.display = 'block';
            sound_on.current.style.display = 'none';
            muted.current.style.display = 'none';
        }
    };

    return (
        <div className={styles.headers}>
            <video src={props.yego} id="video" ref={yegoVideo} onEnded={controlVideo} poster={props.poster} muted className={styles.yego_video}></video>
            <div className={styles.control_video}>
                <div className={styles.inner}>
                    <div className={styles.control_container1}>
                        <img src={props.image} alt="title" />
                        <p>{props.explain}</p>
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
        </div>
    );
}

export default Video