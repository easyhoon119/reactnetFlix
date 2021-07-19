import styles from './Main.module.css';
import { useHistory, Link } from 'react-router-dom';
import { React, useEffect, useRef, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import zIndex from '@material-ui/core/styles/zIndex';
import { useDispatch, useSelector } from 'react-redux';
import { likeAction } from '../reducer/reduce';


function Moviedetail(props) {

    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const down = useRef();
    const listCount = [['1화', '54분'], ['2화', '38분'], ['3화', '50분'], ['4화', '52분'], ['5화', '48분'], ['6화', '52분'], ['7화', '60분'], ['8화', '54분'], ['9화', '49분'], ['마지막화', '56분']];
    const list = useSelector(state => state.likeReducer);


    const openModal = (e) => {
        e.stopPropagation();
        setOpen(true);
        if (down.current.id === 'detail') {
            console.log(down.current);
            down.current.style.display = 'none';
            props.func();
        }
    }

    const closeModal = (e, reason) => {
        e.stopPropagation();
        setOpen(false);
    }

    const noClose = (e) => {
        e.stopPropagation();
        setOpen(true);
    }

    const handleListItemClick = (event, index) => {
        console.log(index);
        console.log(selectedIndex);
        setSelectedIndex(index);
    };

    const addLike = (e) => {
        dispatch(likeAction({
            userLike: [...list.userLike, {
                title: props.alt,
                image: props.image,
                titleImage: props.titleImg,
                modalImage: props.modalImg
            }]
        }));
    }

    const realList = listCount.map((item, index) => (<div key={index}><ListItem button selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index)} divider={true} className={styles.realList} ><span className={styles.countIndex}>{index + 1}</span><img src={props.image} className={styles.countImg} style={{ borderRadius: '5px' }} /><ListItemText primary={item[0]} className={styles.countText}></ListItemText><ListItemText primary={item[1]} className={styles.countTime}></ListItemText></ListItem><hr /></div>));

    return (
        <div className={styles.movie_detail} ref={down} id="detail">
            <div className={styles.detail_btn}>
                <i className="far fa-play-circle" id="play"></i>
                <i className="fas fa-plus-circle" onClick={addLike} id="plus" style={{ cursor: 'pointer' }}></i>
                <i className="far fa-thumbs-up" id="up"></i>
                <i className="far fa-thumbs-down" id="down"></i>
                <Dialog open={open} onClose={closeModal} scroll='body' style={{ zIndex: 99999999 }} maxWidth={false} onMouseLeave={noClose} className={styles.dialog}>
                    <div className={styles.modalSize}>
                        <DialogContent style={{ backgroundColor: '#141414', padding: 0, maxWidth: 'none', maxHeight: 'none', overflow: 'visible' }} >
                            <img src={props.modalImg} className={styles.modalImg} />
                            <i className={`fas fa-times-circle ${styles.exitBtn}`} onClick={closeModal}></i>
                            <div className={styles.modalTitle}>
                                <img src={props.titleImg} className={styles.tiImage} />
                                <div className={styles.modalControl}>
                                    <div className={`${styles.btn} ${styles.modalBtnPlay}`}>
                                        <i className="fas fa-play"></i>재생
                                    </div>
                                    <i className="fas fa-plus-circle"></i>
                                    <i className="far fa-thumbs-up"></i>
                                    <i className="far fa-thumbs-down"></i>
                                </div>
                            </div>
                            <div className={styles.modalExplain}>
                                <div className={styles.explain1}>
                                    <p>지금 시청하세요</p>
                                    <p>어느덧 몸 상태가 호전된 안데르. 알렉시스가 화학 요법을 받도록 도우며 여름을 보낼 생각이다. 아무리 밀어내도 부메랑처럼 돌아온 사람들이 있었듯이, 이제는 안데르가 알렉시스를 위해 부메랑이 될 차례다.</p>
                                </div>
                                <div className={styles.explain2}>
                                    <p style={{ fontSize: '15px' }}><span style={{ color: 'gray' }}> 출연</span> : 텍, 록바, 디모, 오션, 소니아, 밀크</p>
                                    <p style={{ fontSize: '15px' }}><span style={{ color: 'gray' }}> 장르</span> : 드라마</p>
                                    <p style={{ fontSize: '15px' }}><span style={{ color: 'gray' }}>프로그램 특징</span> : 다크</p>
                                </div>
                            </div>
                            <List className={styles.dialogList}>
                                <ListItem className={styles.listUpper}>
                                    <ListItemText primary="회차" />
                                    <ListItemText primary={props.alt} className={styles.secondList} />
                                </ListItem>
                                <hr />
                                {realList}
                            </List>
                            <div className={styles.dialogFooter}>
                                <p><strong>{props.alt}</strong>   상세정보</p>
                                <div className={styles.explain3}>
                                    <p><span style={{ color: 'gray' }}>출연</span> : 텍, 록바, 디모, 오션, 소니아, 밀크</p>
                                    <p><span style={{ color: 'gray' }}>장르</span> : 드라마</p>
                                    <p><span style={{ color: 'gray' }}>프로그램 특징</span> : 다크</p>
                                </div>
                            </div>
                        </DialogContent>
                    </div>
                </Dialog>
                <i className="far fa-times-circle" id="time"></i>
                <i className="fas fa-chevron-circle-down" onClick={openModal} id="chevron"></i>
            </div>
            <p className={styles.detail_title}>시즌 1: 1화 "{props.alt}"</p>
            <div className={styles.detail_time}>
                <progress id="watch_time" max="100" value="30" className={styles.time_rating}></progress>
                <p className={styles.time_watch} id="watch_text">총 30분 중 12분</p>
            </div>
        </div>
    );
}

export default Moviedetail