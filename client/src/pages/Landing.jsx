import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobsure" className="logo" />
      </nav>
      <div className="container page">
      {/* info */}
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        {/* image */}
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  );
};




export default Landing;
