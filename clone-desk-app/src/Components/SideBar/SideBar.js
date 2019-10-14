import React from 'react';
import style from './SideBar.module.css';

const SideBar = (props) => {
    return (
        <div className={style.SideBar}>
        <div className={style.SideBarHeader} id='channels' onClick={props.toggleElement}>
            Channels
        </div>
        
        <div className={style.SideBarHeader} id='organizations' onClick={props.toggleElement}>
            Organizations
        </div>
        <div className={style.SideBarHeader} id='projects' onClick={props.toggleElement}>
            Projects
        </div>
        </div>
    )
};

export default SideBar