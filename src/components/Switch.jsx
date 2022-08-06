import React, { useContext } from "react";
import { MyContext } from "../context/myContext";
import "./Switch.css";
const Switch = () => {
  const context = useContext(MyContext);

  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        checked={context.theme}
        onChange={context.handlerChange}
      />
      
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};
export default Switch;
