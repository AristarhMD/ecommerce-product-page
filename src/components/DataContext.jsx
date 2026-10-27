import { createContext, useState } from "react";

const DataContext = createContext();

export default function DataProivder({ children }) {
  const [itemQty, setItemQty] = useState(0);
  return (
    <DataContext.Provider value={{ itemQty, setItemQty }}>
      {children}
    </DataContext.Provider>
  );
}
