import React from 'react'
import LandingSection from '../../sections/LandingSection'
import VideoSection from '../../sections/VideoSection'
import ContactUs from '../../sections/ContactUs'
import AboutUs from '../../sections/AboutUs'

const HomePage = () => {
    return (
        <div>
            <LandingSection />
            <div className="video-section-wrapper">
                <AboutUs />
            </div>
            <div className="video-section-wrapper bg-dark">
                <VideoSection />
            </div>
            <div className="video-section-wrapper">
                <ContactUs />
            </div>
        </div>
    )
}

export default HomePage
