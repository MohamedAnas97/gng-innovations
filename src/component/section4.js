import Arrow from "../../src/assets/homepage/Arrow.svg";
const Section4 = () => {
  return (
    <div className="section4_container container">
      <div className="section4_content">
        <div className="section4_main">
          <h1>Let's Discuss Your Project</h1>
          <p>
            Get free consultation and let us know your <br /> project idea to
            turn it intoan amazing digital <br /> product.
          </p>

          <div className="sec4_button">
            <h6> Talk to our Experts</h6>
            <img src={Arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section4;
