import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Ben's Zoo</h1>
      <h1>Two big images with links to animals and birds will be here</h1>
      <a href="/Animals">Animals</a>
      <Link to="/Animals">Animals</Link>
    </>
  );
}

export default Home;
