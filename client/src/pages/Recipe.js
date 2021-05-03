import React from "react";
import { withRouter } from "react-router";

const Recipe = (props) => {
  const food = props.match.params.foodname;

  return (
    <main className="main">
      <div>
        <h1>{food}</h1>
        <p>1. 물을 끓인다</p>
        <p>2. 물을 끓인다</p>
        <p>3. 물을 끓인다</p>
        <p>4. 물을 끓인다</p>
        <p>5. 물을 끓인다</p>
        <p>6. 물을 끓인다</p>
      </div>
    </main>
  );
};

export default withRouter(Recipe);
