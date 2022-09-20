import { useContext } from "react";
import { ctx } from "../Context/AppContext";
import GrandChild from "./Grandchild";
import style from "./Child.module.css";

function Child() {
  const state = useContext(ctx);
  return (
    <div className={style.container}>
      This is coming from Child
      <p>Current state theme is {state.theme}</p>
      <button
        onClick={() => {
          state.changeTheme("green");
        }}
      >
        Change theme to green
      </button>
      <GrandChild />
    </div>
  );
}

export default Child;
