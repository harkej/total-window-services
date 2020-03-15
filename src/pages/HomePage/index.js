import React from 'react'
import LandingSection from '../../sections/LandingSection'
import VideoSection from '../../sections/VideoSection'

const HomePage = () => {
    return (
        <div>
            <LandingSection />
            <div className="video-section-wrapper">
                <VideoSection />
            </div>
            <div style={{height: '100vh'}} />
        </div>
    )
}

export default HomePage
