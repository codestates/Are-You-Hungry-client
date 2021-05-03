import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";

const Recipe = (props) => {
  const food = props.match.params.foodname;
  const url =
    "http://ec2-15-165-205-147.ap-northeast-2.compute.amazonaws.com:4000/search/?foodname=";

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
