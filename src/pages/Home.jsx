import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Ben's Zoo</h1>
      <h1>Two big images with links to animals and birds will be here</h1>
      <Link to="/animals">Animals</Link>
      <Link to="/birds">Birds</Link>
    </>
  );
}

export default Home;
