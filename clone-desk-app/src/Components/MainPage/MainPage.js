import React from 'react';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

const MainPage = (props) => {
    return (
        <div>
            <Header />
            <SideBar
            data={props.data}
            toggleElement={props.toggleElement}
            showChannels={props.showChannels}
            showOrganizations={props.showOrganizations}
            showProjects={props.showProjects}/>
            <div style={{'width':'80%', 'marginLeft': '20%'}}>

            <h1>HELOOOOO</h1>
            </div>
        </div>
    )
};

export default MainPage;