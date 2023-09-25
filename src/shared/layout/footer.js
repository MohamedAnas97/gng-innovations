import Logo from "../../assets/homepage/logo.svg";
import Content from "../../assets/homepage/Hello.svg";
import Location from "../../assets/homepage/Location.svg";
const Footer = () => {
  return (
    <div className="section8_container container">
      <div className="section8_top">
        <img src={Logo} alt="" style={{ width: "200px" }} />

        <div className="section8_left">
          <div className="section8_logo">
            <img src={Content} alt="" />
          </div>
          <div className="section8_line"></div>
        </div>
      </div>
      <div className="section8_down">
        <div className="section8_content">
          <ul>
            <li>
              <span>Web App Development</span>
            </li>
            <li>ReactJs Development</li>
            <li>Vue.js Development</li>
            <li>AngularJs Development</li>
            <li>Node.js Development</li>
            <li>Laravel Development</li>
            <li>Golang Development</li>
          </ul>
        </div>
        <div className="section8_content">
          <ul>
            <li>
              <span>Mobile App Development</span>
            </li>
            <li>iOS App Development</li>
            <li>Android App Development</li>
            <li>Flutter App Development</li>
            <li>React Native App Development</li>
          </ul>
        </div>
        <div className="section8_content">
          <ul>
            <li>
              <span>Blockchain Development</span>
            </li>
            <li>Smart Contract Development</li>
            <li>NFT Development</li>
            <li>Crypto Tokens Development</li>
            <li>Decentralized App Development</li>
          </ul>
        </div>
        <div className="section8_content">
          <ul>
            <li>
              <span>Services</span>
            </li>
            <li>Marketing Services</li>
            <li>Cloud Storage & Hosting Services</li>
          </ul>
        </div>
      </div>
      <div className="sec8_line"></div>
      <div className="sec8_content">
        <div className="section8_location">
          <div className="sec8_loc">
            <img src={Location} alt="" />
          </div>
          <div className="sec8_site">
            <h3>UAE</h3>
            <p>
              1113, G&G Innovations Information Technology,Grosvenor Business
              Tower,Barsha Heights - Dubai, UAE
            </p>
          </div>
        </div>
        <div className="section8_location">
          <div className="sec8_loc">
            <img src={Location} alt="" />
          </div>
          <div className="sec8_site">
            <h3>UAE</h3>
            <p>
              501, Tech Tank Information Technology,Citadel Tower, Business Bay
              - Dubai, UAE
            </p>
          </div>
        </div>
      </div>
      <div className="sec8_line"></div>
      <div className="sec8_footer">
        <div className="foot_cont">
          <h6>© 2023 G&G Infotech. All rights reserved.</h6>
        </div>
        <div className="foot_link">
          <ul>
            <li>About Us</li>
            <span>|</span>
            <li>Portfolio</li>
            <span>|</span>
            <li>Privacy Policy</li>
            <span>|</span>
            <li style={{ paddingRight: "0px" }}>Sitemap</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
