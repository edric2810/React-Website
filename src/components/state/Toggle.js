import React, { useState } from "react";
import "../../styles/ToggleStyles.css";

// stateless funcitional component: component nhưng không sử dụng state
function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);

  const setToggle = () => {
    setOn((prevState) => {
      return !prevState;
    });
  };
  return (
    <div onClick={() => setToggle()}>
      <div className={`toggle ${on ? "active" : ""}`}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
}

export default Toggle;
// function Toggle2() {
//   return <div className="toggle"></div>;
// }
// stateless funcitional component: component có sử dụng state
