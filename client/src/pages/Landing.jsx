import { Link } from "react-router-dom";
import mainone from "../assets/images/mainone.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components/Logo";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
      <Logo/>
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
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        {/* image */}
        <img src={mainone} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  );
};




export default Landing;
