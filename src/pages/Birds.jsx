import Card from "../components/Card.jsx";

function Birds({
  birdList,
  searchHandler,
  removeBirdHandler,
  likesBirdHandler,
  search,
}) {
  return (
    <>
      <h1>Ben's Zoo</h1>
      <input type="text" onChange={searchHandler} />
      <div className="cards">
        {birdList
          .filter((bird) =>
            bird.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((bird) => (
            <Card
              addLikes={() => likesBirdHandler(bird.name, "add")}
              removeLikes={() => likesBirdHandler(bird.name, "remove")}
              key={bird.name}
              {...bird}
              click={() => removeBirdHandler(bird.name)} //WHY DOES removeHandler need the animal.name argument here, when that is defined inside the removeHandler function itself? Send all animal object to the child component, so child (Card) can read properties as props name={animal.name} likes={animal.likes}
            />
          ))}
      </div>
    </>
  );
}

export default Birds;
