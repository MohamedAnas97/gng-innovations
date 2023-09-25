import Logo from "../../assets/homepage/logo.svg";
const Header = () => {
  return (
    <div className="navbar_container container">
      <div className="navbar_content">
        <div>
          <img src={Logo} alt="" style={{ width: "180px" }} />
        </div>
        <div>
          <ul>
            <li>Services</li>
            <li>Solutions</li>
            <li>Portfolio</li>
            <li style={{ paddingRight: "0px" }}>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
