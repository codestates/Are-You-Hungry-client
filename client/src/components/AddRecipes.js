import React, { useState } from "react";
import "../styles/AddRecipes.css";

const AddRecipes = ({ recipe, setRecipe }) => {
  const [stepNumber, setStepNumber] = useState(1);
  const [instruction, setInstruction] = useState("");

  const addStep = () => {
    if (stepNumber && instruction) {
      setRecipe((prev) => {
        return [
          ...prev,
          {
            cooking_no: stepNumber,
            cooking_dc: instruction,
            step_image: "",
            step_tip: "",
          },
        ];
      });

      setStepNumber((prev) => prev + 1);
      setInstruction("");
    }
  };

  const renderedRecipe = recipe.map((instruction) => {
    return (
      <div className="instruction-container">
        <span>
          {instruction.cooking_no}: {instruction.cooking_dc}
        </span>
      </div>
    );
  });

  return (
    <>
      <div id="display-instructions">
        <p>조리법</p>
        {renderedRecipe}
      </div>
      <form id="add-instruction-form" onSubmit={(e) => e.preventDefault()}>
        <textarea
          id="instruction"
          placeholder="순서대로 레시피를 작성해주세요."
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
        />
        <button onClick={addStep}>조리법 추가</button>
      </form>
    </>
  );
};

export default AddRecipes;
