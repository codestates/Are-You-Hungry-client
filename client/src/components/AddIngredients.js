import React, { useState } from "react";
import "../styles/AddIngredients.css";

const AddIngredients = ({ ingredients, setIngredients }) => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [type, setType] = useState("주재료");

  const addIngredient = () => {
    if (name && qty && type) {
      setIngredients((prev) => {
        return [...prev, { name, cap: qty, itype: type }];
      });
    }
    setName("");
    setQty("");
    setType("주재료");
  };

  const renderedIngredients = ingredients.map((ingredient) => {
    return (
      <div className="ingredient-entry">
        <span>
          {ingredient.name} - {ingredient.cap} - {ingredient.itype}
        </span>
      </div>
    );
  });

  return (
    <>
      <div id="display-ingredients">
        <p>Ingredients</p>
        {renderedIngredients}
      </div>
      <form onSubmit={(e) => e.preventDefault()} id="add-ingredient-form">
        <div className="input-container">
          <label htmlFor="ingredient-name">재료명</label>
          <input
            type="text"
            id="ingredient-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="ingredient-quantity">양</label>
          <input
            type="text"
            id="ingredient-quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="ingredient-type">종류</label>
          <select
            id="ingredient-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>주재료</option>
            <option>부재료</option>
            <option>양념</option>
          </select>
        </div>
        <button onClick={addIngredient}>Submit</button>
      </form>
    </>
  );
};

export default AddIngredients;
