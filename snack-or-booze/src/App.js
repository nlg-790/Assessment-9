import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import Snack from "./FoodItem"; // Import Snack from FoodItem
import AddItem from "./AddItem";
import { MenuItem, MenuItemDetail } from "./FoodMenu"; // Import MenuItem and MenuItemDetail

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const snackData = await SnackOrBoozeApi.getSnacks();
        const drinkData = await SnackOrBoozeApi.getDrinks();
        setSnacks(snackData);
        setDrinks(drinkData);
        // setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <FoodMenu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <FoodMenu items={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <MenuItemDetail type="Snack" />
            </Route>
            <Route path="/drinks/:id">
              <MenuItemDetail type="Drink" />
            </Route>
            <Route path="/add">
              <AddItem />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

