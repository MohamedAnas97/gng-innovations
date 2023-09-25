import Flutter from "../../src/assets/homepage/Flutter.svg";
import Go from "../../src/assets/homepage/Go.svg";
import Kub from "../../src/assets/homepage/kubernets.svg";
import Rea from "../../src/assets/homepage/React.svg";
import Carousel from "react-multi-carousel";
const Section3 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 767, min: 400 },
      items: 3,
    },
    smallmobile: {
      breakpoint: { max: 400, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="section3_container container">
      <div className="sec3_top">
        <h1>Trending Technologies</h1>
      </div>
      <div className="sec3_middle"></div>
      <Carousel arrows={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}  className="sec3_down">
        <div className="sec3_img">
          <img src={Flutter} alt="" />
        </div>
        
        <div className="sec3_round">
          <button></button>
        </div>
        
        <div className="sec3_img">
          <img src={Go} alt="" style={{width: "60px", height: "68px", paddingBottom: "30px"}} />
        </div>
        
        <div className="sec3_round">
          <button></button>
        </div>
      
        <div className="sec3_img">
          <img src={Kub} alt="" />
        </div>
      
        <div className="sec3_round">
          <button></button>
        </div>
      
        <div className="sec3_img">
          <img src={Rea} alt="" />
        </div>

        <div className="sec3_round">
          <button></button>
        </div>
      </Carousel>
      <div className="sec3_middle"></div>
    </div>
  );
};
export default Section3;
