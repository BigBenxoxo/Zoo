import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import { animals } from "./animalsList";

function App() {
  const [animalList, setAnimals] = useState(animals); //this is the state, because if we want to re-render (meaning update or refresh to see changes), it can be done only by state.
  const removeHandler = (name) => {
    // the (name) is the parameter here.
    const updatedArray = animalList.filter((animal) => animal.name !== name);
    setAnimals(updatedArray); // The filter method is used to create a new array (updatedArray) by excluding the animal with the specified name.
    // It iterates through each element in animalList and only includes elements where the animal's name is not equal to the specified name.

    // The setAnimals function is then called with the updatedArray as an argument.
    // This triggers a re-render of the component with the updated state,   effectively removing the specified animal from the list.
  };
  const [search, setSearch] = useState("");
  const searchHandler = (event) => {
    // Why is this = (event) what does event mean / how does it know what an event is?
    setSearch(event.target.value);
  };

  const likesHandler = (name, action) => {
    const updatedArray = animalList.map((animal) => {
      if (animal.name === name) {
        if (action === "add") {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return { ...animal, likes: animal.likes - 1 };
        }
      } else {
        return animal;
      }
    });
    setAnimals(updatedArray);
  };

  return (
    <>
      <Header />
      <main>
        <input type="text" onChange={searchHandler} />
        <h1>Ben's Zoo</h1>
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
      </main>
      <Footer />
    </>
  );
}

export default App;
