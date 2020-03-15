import React from "react";
import * as ServiceImg1 from "../../assets/images/heritage-window.jpg";
import * as ServiceImg2 from "../../assets/images/heritage-site.jpg";
import * as ServiceImg3 from "../../assets/images/premium-glass.jpg";
import { Button } from "reactstrap";

const renderData = [
  {
    id: 1,
    name: "Heritage Window Restoration",
    img: ServiceImg1,
    desc:
      "At Total Window Services, we specialise in heritage window restoration. Some our clients include the Palais Theatre and Flinders Street Station. Our heritage window services include glazing, timber and steel frames. We can provide you with replacement, repair and restoration of both the glass and frames of your heritage site."
  },
  {
    id: 2,
    name: "Commercial Window Repairs and Maintenance",
    img: ServiceImg2,
    desc:
      "Whether your commercial windows need only minor repairs, total restoration or are in serious need of replacement, partner with our team and all your needs will be taken care of. Contact Total Window Services to discuss your project needs or arrange an inspection and we will be able to support you with the right products and the right professional services."
  },
  {
    id: 3,
    name: "Premium Glass Supplies",
    img: ServiceImg3,
    desc:
      "Talk to our team about your project and once we gain the right measurements and an understanding of your needs, we will source the right high-quality windows or glass supplies for you. Not only do we offer professional glass supplies but we can arrange for the supply delivery to your site. Our team can perform the professional installation of your windows and glass frames."
  }
];

const OurServices = () => {
  return (
    <div className="our-services-container">
      <h3 style={{fontSize: '2.5em', fontWeight: 500, margin: '0 0 40px'}}>Our Services</h3>
      <div className="services-button">
        {renderData.map(item => (
          <Button key={item.id} type="button" success color="success">
            {item.name}
          </Button>
        ))}
      </div>
      <div className="services-details-container">
        {renderData.map(item => (
          <div key={item.id} className="services-details">
            <div className="services-details-info">
              <p className="services-details-title">{item.name}</p>
              <p className="services-details-desc">{item.desc}</p>
            </div>
            <div className="services-details-image">
              <img src={item.img} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
