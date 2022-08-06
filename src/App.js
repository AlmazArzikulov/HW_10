import "./App.css";
import { Header } from "./components/Header";
import { MyContext } from "./context/myContext";
import { useState } from "react";

function App() {
  const [switchTheme, setswitchTheme] = useState(true);

  function handlerChange() {
    setswitchTheme(!switchTheme);
  }
  return (
    <MyContext.Provider value={{ theme: switchTheme, handlerChange }}>
      <Header />
    </MyContext.Provider>
  );
}

export default App;
