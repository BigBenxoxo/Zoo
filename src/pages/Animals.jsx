import Card from "../components/Card.jsx";
import Header from "../components/Header.jsx";

function Animals({
  animalList,
  searchHandler,
  removeHandler,
  likesHandler,
  search,
}) {
  return (
    <>
      <Header />
      <input type="text" onChange={searchHandler} />
      <div className="cards">
        {animalList
          .filter((animal) =>
            animal.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((animal) => (
            <Card
              addLikes={() => likesHandler(animal.name, "add")}
              removeLikes={() => likesHandler(animal.name, "remove")}
              key={animal.name}
              {...animal}
              click={() => removeHandler(animal.name)} //WHY DOES removeHandler need the animal.name argument here, when that is defined inside the removeHandler function itself? Send all animal object to the child component, so child (Card) can read properties as props name={animal.name} likes={animal.likes}
            />
          ))}
      </div>
    </>
  );
}

export default Animals;
