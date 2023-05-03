import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export default function UseContextHook() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Usar modo oscuro
      </label>
    </ThemeContext.Provider>
  );
}

function Form({ children }) {
  return (
    <Panel title="Bienvenido">
      <Button>Registrarse</Button>
      <Button>Iniciar sesión</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  console.log("Props from Panel:", theme);
  return <>{title}{children}</>;
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  console.log("Props from Button:", theme);

  return <button>{children}</button>;
}
