import React from 'react';
import './Packages.scss';

const PackagesJs = () => (
  <div id="packages_container">
    <div className="background_shape">
      <img src="asc/images/contact-shape2.svg" alt="shape" />
    </div>
    <div id="packages">
      <h3> Health Packages </h3>
      <div className="packages_details_container">
        <div className="packages_details_left">
          <h6>We provide the following Preventive Health Packages</h6>
          <ul>
            <li>Jana Seva Silver (87 Tests)</li>
            <li>Jana Seva Gold (89 Tests)</li>
            <li>Jana Seva Diamond (93 Tests)</li>
            <li>Jana Seva Platinum (97 Tests)</li>
            <li>Jana Seva</li>
            <li>Jana Seva Plus (80 Tests)</li>
            <li>JSC Whole Body Comprehensive Master Health Checkup</li>
            <li>Women’s Gold (86 Tests)</li>
          </ul>
        </div>
        <div className="packages_details_right">
          A healthy lifestyle and preventive screening are the two pillars of combating the onset of non-communicable diseases (NCDs). Regular checkups can help in the identification and diagnosis of health conditions in a timely manner.
          <br/>
          <b>To learn more about our Preventive health checkups <a href="https://aarthiscan.com/test-package/preventive-health-checkup" target="_blank"> Click here</a></b>
        </div>
      </div>
    </div>
  </div>
);
export default PackagesJs;
