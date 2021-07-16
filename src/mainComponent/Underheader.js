import styles from './Main.module.css';
import { React, useEffect, useRef, useState } from 'react';

function Underheader(props) {

    const Headerscroll = useRef();
    const [pos, setPos] = useState(0);

    const updateScroll = () => {
        if (Headerscroll.current) {
            setPos(Headerscroll.current.getBoundingClientRect());
            if (pos.top + window.pageYOffset > 75) {
                Headerscroll.current.style.backgroundColor = '#141414';
            }
            else {
                Headerscroll.current.style.backgroundColor = '';
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);

        return () => window.removeEventListener('scroll', updateScroll);
    }, [pos]);

    const section = props.title === '내가 찜한 콘텐츠' ?
        <div className={styles.under} ref={Headerscroll}>
            <div className={styles.inner}>
                <p className={styles.underText}>{props.title}</p>
            </div>
        </div>
        : <div className={styles.under} ref={Headerscroll}>
            <div className={styles.inner}>
                <p className={styles.underText}>{props.title}</p>
                <div className={styles.janre}>
                    <select name="janre" className={styles.janre_select}>
                        <option value="">장르</option>
                    </select>
                </div>
            </div>
        </div>


    return (
        <>
            {section}
        </>
    );
}

export default Underheader