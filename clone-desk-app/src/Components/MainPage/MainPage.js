import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const MainPage = () => {
    const [ sideBarContent, setSideBarContent ] = useState({});

    const getSideBarContent = () => {
        const CORSHack = 'https://cors-anywhere.herokuapp.com/'
        const baseURL = `${CORSHack}https://test-api.clonedesk.com/api/v2/sidebar`;
        const queryParams = `?organizationID=1&projectID=2`;
        const finalURL = `${baseURL}${queryParams}`
        const apiKey = localStorage.getItem('sessionKey')
        console.log(finalURL)
        axios.get(finalURL, {
          'x-api-key' : apiKey,
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    useEffect(() => {
        getSideBarContent()
    }, [])

    return (
        <h1>HELOOOOO</h1>
    )
};

export default MainPage;