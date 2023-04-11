import React from 'react'
import style from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={style.lds_facebook}><div></div><div></div><div></div></div>
    )
}

export default Preloader;