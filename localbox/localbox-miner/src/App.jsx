import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles//GlobalStyles";
import { lightTheme, darkTheme } from "./styles/themes";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [theme, setTheme] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <h1>Localbox Miner</h1>
    </ThemeProvider>
  );
}

export default App;
