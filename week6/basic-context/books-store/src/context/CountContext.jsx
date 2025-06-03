import { createContext, useState } from "react";

export const CountContext = createContext();

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("anisa");
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
