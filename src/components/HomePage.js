import React from 'react'
import Login from './Login'

const HomePage = () => {

    return (
        <div id="homepage">
            <div id="homepage-welcome">
                <h1 className="home-header">BlogAp</h1>
                <ul className="site-info-list">
                    <li className="site-info">I built this to learn about backend programming</li>
                    <li className="site-info">Based on exercises from <a id="site-link" target="_blank" href="https://fullstackopen.com/en">Full Stack Open</a></li>
                    <li className="site-info">Built using MongoDB, Express, React and Node.js</li>
                    <li className="site-info">Try making an account and posting some text blogs</li>
                </ul>
            </div>
            <Login />
        </div>
    )
}

export default HomePage;