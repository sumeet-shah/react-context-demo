import { createContext, useState } from "react";

export const defaultState = {
  theme: "dark",
  changeTheme: (theme) => {},
};

export const ctx = createContext(defaultState);

function AppContext({ children }) {
  const [theme, setTheme] = useState("dark");

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  return <ctx.Provider value={{ theme, changeTheme }}>{children}</ctx.Provider>;
}

export default AppContext;
