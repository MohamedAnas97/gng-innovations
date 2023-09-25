import Service from "../../src/assets/homepage/Service.svg";
import Game from "../../src/assets/homepage/Game.svg";
import UI from "../../src/assets/homepage/UI UX.svg";
import Meta from "../../src/assets/homepage/Meta.svg";
import Mobile from "../../src/assets/homepage/Mobile.svg";
import Web from "../../src/assets/homepage/Web.svg";
import Content from "../../src/assets/homepage/gamecontent.svg";
import GNG from "../../src/assets/homepage/gng.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Section2 = () => {
    //responsive breakpoints
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 767 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 767, min: 567 },
        items: 2,
      },
      smallmobile: {
        breakpoint: { max: 567, min: 0 },
        items: 1,
      },
    };
  return (
    <div className="section2_container container">
      <div className="section2_top">
        <div className="sec2_cont1">
          <h1>Services</h1>
        </div>
        <div className="sec2_cont2">
          <div className="sec2_img">
            <img src={Service} alt="" />
          </div>
          <div className="sec2_line"></div>
        </div>
      </div>
      
      <Carousel arrows={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000} className="section2_middle" >
      
        <div className="sec2_mid_color">
          <img src={Game} alt="" />
          <h6>Game Development</h6>
        </div>
        {}
        <div className="sec2_mid_content">
          <img src={UI} alt="" />
          <h6>UI/UX & Graphic Design</h6>
        </div>
        {}
        <div className="sec2_mid_content">
          <img src={Meta} alt="" />
          <h6>Metaverse Development</h6>
        </div>
        {}
        <div className="sec2_mid_content">
          <img src={Mobile} alt="" />
          <h6>Mobile App Development</h6>
        </div>
        {}
        <div className="sec2_mid_content">
          <img src={Web} alt="" />
          <h6>Web Development</h6>
        </div>
        </Carousel>
        
     
      
      <div className="section2_down">
        <div className="game_img1"></div>
        <div className="game_img2">
          <div className="game_imgcontent">
            <p>
              We are a creative team of mobile game developers and designers
              offering end-to-end game development solutions. Partner with us to
              build exciting mobile games that meet user expectations across all
              platforms.
            </p>

            <img src={Content} alt="" />
          </div>
        </div>
      </div>
      <div className="section2_down">
        <div className="game_img3"></div>
        <div className="game_img4"></div>
        <div className="game_img5">
          <div className="game_gng">
            <img src={GNG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
