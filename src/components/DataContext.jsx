import { createContext, useState } from "react";

const DataContext = createContext();

function DataProivder({ children }) {
  const [orderedItem, setOrderedItem] = useState([]);
  return (
    <DataContext.Provider value={{ orderedItem, setOrderedItem }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataProivder, DataContext };
