import Header from "../components/Header";

function About() {
  return (
    <>
      <Header />
      <h1>About this project:</h1>
      <br></br>
      <h3>
        This project was created to practice React and React Router. It is a
        simple application that fetches data from an API and displays it in a
        list. The user can also search for a specific item.
      </h3>
      <br></br>
      <p>
        The implemented features include: Likes and dislikes and active search
        filtering.
      </p>
      <br></br>
      <p>
        What I have learned during this project is how to implement React
        Router, and how to manage likes and dislikes, i have also learned quite
        a bit of CSS.
      </p>
    </>
  );
}

export default About;
