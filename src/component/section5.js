import Current from "../../src/assets/homepage/current.svg";
const Section5 = () => {
  return (
    <div className="section5_container container">
      <div className="sec5_top">
        <div>
          <h6>Our Work</h6>
        </div>
        <div className="button_section5">
          <button></button>
        </div>
      </div>
      <div className="sec5_middle">
        <div>
          <h1>Current Projects</h1>
        </div>
        <div>
          <img src={Current} alt="" />
        </div>
      </div>
      <div className="sec5_down">
        <div className="sec5_img1">
          <div className="sec5_content">
            <h6>UI/UX Design. Website & Mobile App Development.</h6>
            <h2>GoldSouk.com-Enterprise Platform</h2>
          </div>
        </div>
        <div className="sec5_img2"></div>
      </div>
      <div className="sec5_down">
        <div className="sec5_img3"></div>
        <div className="sec5_img4"></div>
        <div className="sec5_img5"></div>
      </div>
    </div>
  );
};
export default Section5;
