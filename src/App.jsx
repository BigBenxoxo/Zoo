import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import { animals } from "./animalsList";

function App() {
  const [animalList, setAnimals] = useState(animals);

  return (
    <>
      <Header />
      <main>
        <h1>Ben's Zoo</h1>
        <div className="cards">
          {animalList.map((animal) => (
            <Card
              key={animal.id}
              {...animal}
              click={() => removeHandler(animal.id)}
            />
          ))}

          <Card
            name={animals[0].name}
            type={animals[0].type}
            img={animals[0].img}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
