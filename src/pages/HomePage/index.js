import React from 'react'
import LandingSection from '../../sections/LandingSection'
import VideoSection from '../../sections/VideoSection'
import ContactUs from '../../sections/ContactUs'

const HomePage = () => {
    return (
        <div>
            <LandingSection />
            <div className="video-section-wrapper">
                <VideoSection />
            </div>
            <div className="video-section-wrapper">
                <ContactUs />
            </div>
        </div>
    )
}

export default HomePage
