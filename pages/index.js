import React from "react";

import { checkInputType } from "../utils/typing";
import IntXifm from "../magaele/int_xifm";

const Index = () => {
  //   const [input, setInput] = React.useState("中文");

  //   console.log("input", input);


  
  return (
    <div>
      <p>Hello Next.js</p>
      <input
        onBlur={e => {
          checkInputType(e.target.value, true);
        }}
      />
      <br />

      <IntXifm />
    </div>
  );
};

export default Index;
