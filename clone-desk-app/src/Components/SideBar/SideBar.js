import React from 'react';
import style from './SideBar.module.css';

const SideBar = (props) => {
    const channels = props.data.channels.map((channel, index) => <div className={style.SideBarContent} key={index}>{channel.name}<span className={style.TasksEveryone}>{channel.tasksOverall}</span></div>);
    const organizations = props.data.organizations.map((organization, index) => <div className={style.SideBarContent} key={index}>{organization.name}<span className={style.TasksEveryone}>{organization.tasksEveryone}</span></div>);
    const projects = props.data.projects.map((project, index) => <div className={style.SideBarContent} key={index}>{project.name}<span className={style.TasksEveryone}>{project.tasksEveryone}</span></div>)
    
    return (
        <div className={style.SideBar}>
        <div className={style.SideBarHeader} id='channels' onClick={props.toggleElement}>
            Channels
        </div>
        <div className={style.AddSideBarContent} onClick={() => window.alert('New Channel Added')}> ADD CHANNEL</div>
        {props.showChannels && channels}
        <div className={style.SideBarHeader} id='organizations' onClick={props.toggleElement}>
            Organizations
        </div>
        <div className={style.AddSideBarContent} onClick={() => window.alert('New Organization Added')}> ADD ORGANIZATION</div>
        {props.showOrganizations && organizations}
        <div className={style.SideBarHeader} id='projects' onClick={props.toggleElement}>
            Projects
        </div>
        <div className={style.AddSideBarContent} onClick={() => window.alert('New Project Added')}> ADD PROJECT</div>
        {props.showProjects && projects}
        </div>
    )
};

export default SideBar