import { useContext } from "react";
import { ctx } from "../Context/AppContext";
import style from "./GrandChild.module.css";

function GrandChild() {
  const state = useContext(ctx);

  return (
    <div className={style.container}>
      This is coming from grandchild.
      <p>Current state theme value is {state.theme}</p>
      <button
        onClick={() => {
          state.changeTheme("blue");
        }}
      >
        Change theme to blue
      </button>
    </div>
  );
}

export default GrandChild;
