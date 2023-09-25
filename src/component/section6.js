import Hello from "../../src/assets/homepage/Hello.svg";
import Skype from "../../src/assets/homepage/skype.svg";
import Email from "../../src/assets/homepage/mail.svg";
import Call from "../../src/assets/homepage/Call.svg";
const Section6 = () => {
  return (
    <div className="section6_container container">
      <div className="section6_main">
        <div className="section6_left">
          <div className="sec6_line"></div>
          <div>
            <h3>For Project Inquiries</h3>
          </div>
          <form>
            <div className="section6_content">
              <div className="input_box">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name:"
                />
              </div>
              <div className="input_box">
                <input
                  type="Email"
                  id="email"
                  name="email"
                  placeholder="Email Address:"
                />
              </div>

              <div className="input_box">
                <input
                  type="text"
                  id="number"
                  name="number"
                  placeholder="Phone Number:"
                />
              </div>
              <div className="input_box">
                <select>
                  <option>Ascension Island</option>
                  <option>Canada</option>
                  <option>USA</option>
                </select>
              </div>

              <div className="input_message">
                <textarea
                  rows="7"
                  cols="50"
                  name="comment"
                  form="usrform"
                  placeholder="Your Message:"
                ></textarea>
              </div>

              <div className="input_submit">
                <input type="submit" value="Send" />
              </div>
            </div>
          </form>
        </div>
        <div className="section6_right">
          <div className="sec6_top">
            <div className="sec6_right">
              <div className="sec6_right_left">
                <h6>Say</h6>
                <button></button>
              </div>
              <div className="sec6_right_down">
                <h1>Hello</h1>
              </div>
            </div>
            <div className="sec6_right_right">
              <div>
                <img src={Hello} alt="" />
              </div>
              <div className="sec6_line"></div>
            </div>
          </div>
          <div className="section6_middle">
            <div className="sec6_cont">
              <img src={Skype} alt="" />
              <h6>biz.gnginfotech</h6>
            </div>
            <div className="sec6_cont">
              <img src={Email} alt="" />
              <h6>biz.gnginfotech</h6>
            </div>
            <div className="sec6_cont">
              <img src={Call} alt="" />
              <h6>+971-04-3349500</h6>
            </div>
          </div>
          <div className="section6_line"></div>
        </div>
      </div>
    </div>
  );
};
export default Section6;
