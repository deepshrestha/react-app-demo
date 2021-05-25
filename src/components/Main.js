import React from "react";

const Main = (props) => {
  return (
    <main>
      <h1 style={{ color: props.textColor, fontSize: props.textSize }}>
        This is a body section.
      </h1>
    </main>
  );
};

export default Main;
