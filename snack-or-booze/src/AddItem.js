import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SnackOrBoozeApi from "./Api";

function AddItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [serve, setServe] = useState("");
  const [type, setType] = useState("snacks");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a new item object
    const newItem = {
      name,
      description,
      recipe,
      serve,
      type,
    };

    try {
      // Make a POST request to add the new item
      await SnackOrBoozeApi.postItem(newItem);

      // Optionally, you can redirect the user to a different page after adding the item
      // history.push("/menu");

      // Clear the form fields
      setName("");
      setDescription("");
      setRecipe("");
      setServe("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="recipe">Recipe:</label>
          <input
            type="text"
            id="recipe"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="serve">Serve:</label>
          <input
            type="text"
            id="serve"
            value={serve}
            onChange={(e) => setServe(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="snacks">Snacks</option>
            <option value="drinks">Drinks</option>
          </select>
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItemPage;
