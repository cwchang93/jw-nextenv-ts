import React from "react";

import { checkInputType } from "../utils/typing";

const Index = () => {
  //   const [input, setInput] = React.useState("中文");

  //   console.log("input", input);

  return (
    <div>
      <p>Hello Next.js</p>
      <input
        onBlur={e => {
          checkInputType(e.target.value);
        }}
      />
    </div>
  );
};

export default Index;
