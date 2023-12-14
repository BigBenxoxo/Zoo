import { Link } from "react-router-dom";
import taco from "../assets/Taco.png";
import fossekall from "../assets/Fossekall.jpeg";

function Home() {
  return (
    <>
      <div className="frontImages">
        <Link to="/animals">
          <img className="frontImg1" src={taco} alt="Dog" />
        </Link>
        <Link to="/birds">
          <img className="frontImg2" src={fossekall} alt="Bird" />
        </Link>
      </div>
    </>
  );
}

export default Home;
