import Start from "../../src/assets/homepage/Vector.png";
import Img from "../../src/assets/homepage/Frame 7.png";
import Video from "../../src/assets/homepage/Rectangle 4.png"
import Img2 from "../../src/assets/homepage/Group 37.png"
import Four from "../../src/assets/homepage/400+.svg"
import Two from "../../src/assets/homepage/12+.svg"
import Six from "../../src/assets/homepage/600+.svg"
import Gn from "../../src/assets/homepage/Service.svg"
const Banner = () => {
  return (
    <div className="banner_container container">
      <div className="top_banner">
      <div className="left_banner">
        <div className="left_bannercont">
          <h6>Connecting Dots From</h6>
          <button></button>
          

        </div>
        <div>
          <h1>Design to Development</h1>
        </div>
        <div className="banner_gng">
          
          <div className="banner_line"></div>
          <div className="banner_logo">
          <img src={Gn} alt=""  />
          </div>
          </div>
      </div>
      <div className="right_banner">
        <p>
          Experience the transformative power of deep driving into technology
          and leveling up your business with our innovative
        </p>
        <div className="right_bannercont">
          <button>
            Start Project
            <img
              src={Start}
              alt=""
              style={{ padding: "0px 0px 0px 10px", position: "unset" }}
            />
          </button>
          <img src={Img} alt="" />
        </div>
      </div>
      </div>
      <div className="bottom_banner">
        <div className="left_banner1">
          <div className="video_frame">
            <img src={Video} alt="" />
          </div>
        </div>
        <div className="right_banner2">
          <div className="right_ban1">
            <div className="top_banimg">
              <img src={Img2} alt="" />
            </div>
            <div className="line_banner2">
              
            </div>

          </div>
          <div className="right_ban2">
            <h6>Our Story</h6>
            <p>In publishing and graphic design Lorem Ipsum is a placeholder text commonly used to demonstrate the visual.</p>
          </div>
          <div className="right_ban3">
            <div className="right_ban3con">
              <img src={Two} alt="" />
              <p>Years Experience</p>
            </div>
            <div className="right_ban3con">
              <img src={Six} alt="" />
              <p>Projects Done</p>
            </div>
            <div className="right_ban3con">
              <img src={Four} alt=""/>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
