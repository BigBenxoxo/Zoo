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

  return (
    <>
      <Header />
      <main>
        <h1>Ben's Zoo</h1>
        <div className="cards">
          {animalList.map((animal) => (
            <Card
              key={animal.name}
              {...animal}
              click={() => removeHandler(animal.name)} //WHY DOES removeHandler need the animal.name argument here, when that is defined inside the removeHandler function itself? Send all animal object to the child component, so child can read properties as props name={animal.name} likes={animal.likes}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

// Below is the ReactDemo example.

/*

const removeHandler = (id) => {
  const updatedArray = persons.filter((person) => person.id !== id);
  setPersons(updatedArray); //? Explain how it works.
};

return (
  <div>
    <Header logo="Bendik Pettersen" />
    <main>
      <Greeting name="Someone"></Greeting>
      <img src={Logo} />
      <h2>This is my application</h2>
      <div className="cards">
        {persons.map((person) => (
          <Card
            key={person.id}
            {...person}
            click={() => removeHandler(person.id)}
          /> //Ask to explain this step by step
        ))}
      </div>
      <button className="btn">Click me</button>
    </main>
    <Footer copyright="Copyright Bendik Pettersen" />
  </div>
);
}
*/
