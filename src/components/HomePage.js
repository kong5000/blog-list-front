import React from 'react'
import Login from './Login'

const HomePage = () => {

    return(
        <div id="homepage">
            <div id="homepage-welcome">
                <h1>BlogAp</h1>
                <ul class="site-info-list">
                    <li class="site-info">I built this to learn about backend programming</li>
                    <li class="site-info">Based on exercises from <a href="#">Full Stack Open</a></li>
                    <li class="site-info">I got to familiarize myself with MongoDB, Express, React and Node.js</li>
                    <li class="site-info">Try making an account and posting some text blogs</li>
                </ul>
            </div>
            <Login/>
        </div>
    )
}

export default HomePage;