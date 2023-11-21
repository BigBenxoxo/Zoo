import { useState } from "react";
import Header from "./components/Header";
import Footer from "./Footer";
import Card from "./components/Card";
import { animals } from "./animalsList";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Animals from "./pages/Animals";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [animalList, setAnimals] = useState(animals); //this is the state, because if we want to re-render (meaning update or refresh to see changes), it can be done only by state.
  const removeHandler = (name) => {
    // the (name) is the parameter here.
    const updatedArray = animalList.filter((animal) => animal.name !== name);
    setAnimals(updatedArray); // The filter method is used to create a new array (updatedArray) by excluding the animal with the specified name.
    // It iterates through each element in animalList and only includes elements where the animal's name is not equal to the specified name.

    // The setAnimals function is then called with the updatedArray as an argument.
    // This triggers a re-render of the component with the updated state, effectively removing the specified animal from the list.
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home></Home> },
        {
          path: "/animals",
          element: (
            <Animals
              searchHandler={searchHandler}
              removeHandler={removeHandler}
              search={search}
              animalList={animalList}
              likesHandler={likesHandler}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
