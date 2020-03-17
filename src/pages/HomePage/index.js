import React from "react";
import LandingSection from "../../sections/LandingSection";
import VideoSection from "../../sections/VideoSection";
import ContactUs from "../../sections/ContactUs";
import AboutUs from "../../sections/AboutUs";
import ContactRibbon from "../../components/ContactRibbon";
import OurServices from "../../sections/OurServices";
import ServicesSummary from "../../sections/ServicesSummary";
// import WorkGallery from "../../sections/WorkGallery";
import ImageGallery from 'react-image-gallery';
import * as HeritageSite from '../../assets/images/heritage-site.jpg';
import * as HeritageWindow from '../../assets/images/heritage-window.jpg';
import { WorkGallery } from './data';
import workGallery from "../../sections/WorkGallery/data";

const imagesList = [
  {
    id: 1,
    original: HeritageSite,
    thumbnail: HeritageSite,
    description: "Flinders Street Station",
    originalAlt: 'Flinders Street Station',
    originalTitle: 'Flinders Street Station'
  },
  {
    id: 2,
    original: HeritageWindow,
    thumbnail: HeritageWindow,
    description: "A theatre",
    originalAlt: 'Theatre',
    originalTitle: 'A theatre'
  },
]

const HomePage = () => {
  const getGalleryData = () => {
    return Object.keys(workGallery).reduce((acc, key) => {
      const gallery = workGallery[key].map(item => ({
        original: item,
        thumbnail: item,
        description: key,
        originalAlt: key,
        originalTitle: key
      }));
      return [...acc, ...gallery];
    }, []);
  };

  return (
    <div>
      <LandingSection />
      <div id="about-us" className="video-section-wrapper">
        <AboutUs />
      </div>
      <div id="flinders-station" className="video-section-wrapper bg-dark">
        <VideoSection />
      </div>
      <div id="our-services" className="video-section-wrapper">
          <OurServices />
      </div>
      <div className="video-section-wrapper bg-dark">
          <ServicesSummary />
      </div>
      <div className="video-section-wrapper">
          {/* <WorkGallery /> */}
          <ImageGallery items={getGalleryData()} autoPlay lazyLoad slideDuration={1000} />
      </div>
      <div id="contact-us" className="video-section-wrapper bg-dark">
        <ContactRibbon
          className="contact-us-info"
          message="When it comes to your commercial renovations or heritage property projects ensure you are contacting the best experts
          to take care of your windows and glasswork with Total Window Services. From commercial window repair and restoration,
          to total glass frame replacements - we will source and supply all the right materials, organise the delivery and perform
          the installations all for you. Ask our support staff if you have any queries."
          title="CONTACT US FOR QUALITY WINDOW SUPPLIES & SERVICES IN MELBOURNE"
        />
      </div>
      <div className="video-section-wrapper">
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePage;
