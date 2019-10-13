import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

import Header from '../Header/Header';

const MainPage = () => {
    const [ sideBarContent, setSideBarContent ] = useState({
        channels: [],
        organizations: [],
        projects: [],
        success: false
    });

    const getSideBarContent = () => {
        const baseURL = `https://test-api.clonedesk.com/api/v2/sidebar`;
        const queryParams = `?organizationID=1&projectID=2`;
        const finalURL = `${baseURL}${queryParams}`
        axios.get(finalURL)
        .then(response => {
            response.status === 200
            && setSideBarContent(
                {...sideBarContent},
                sideBarContent.channels = response.data.channels,
                sideBarContent.organizations = response.data.organizations,
                sideBarContent.projects = response.data.projects,
                sideBarContent.success = response.data.success
                )
        })
        .catch(error => console.log(error))
    }
    useEffect(() => {
        getSideBarContent()
    }, [])

    return (
        <div>
            <Header />
            <h1>HELOOOOO</h1>
        </div>
    )
};

export default MainPage;