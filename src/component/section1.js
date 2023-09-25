import Img from "../../src/assets/homepage/Group 37.png"
const Section1 = () => {
    return (
        <div className="section1_container container">
            <div className="section1_top">
                <div>
                    <h6>Who we are</h6>
                </div>
                <div className="button_section1">
                    <button></button>
                </div>
            </div>
            <div className="section1_middle">
                <div className="sec1_middle1"><h3>Your Digital Partner To Create Inspirational Design And Robust Solution For Web, Mobile & Cloud.</h3></div>
                <div className="sec1_middle2">
                    <div className="sec1_midimg"><img src={Img} alt="" /></div>
                    <div className="line_about"></div>
                </div>
            </div>
            <div className="section1_down">
                <p>The Top-notch and preeminent Web and Mobile App Development Company of UAE with its global presence, G&G is first-rate choice of the clients worldwide. With sheer customer satification in mind, we are profoundly dedicated to developing highly intriguing apps and websites that strictly meet the business requirements and cater to wide spectrum of projects.</p>
            </div>

        </div>
    )
}
export default Section1