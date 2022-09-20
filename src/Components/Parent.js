import { useContext } from "react";
import { ctx } from "../Context/AppContext";
import Child from "./Child";
import style from "./Parent.module.css";

function Parent() {
  const state = useContext(ctx);

  return (
    <div className={style.container}>
      This is coming from Parent
      <p>Current state theme is {state.theme}</p>
      <button
        onClick={() => {
          state.changeTheme("red");
        }}
      >
        Change theme to red
      </button>
      <Child />
    </div>
  );
}

export default Parent;
