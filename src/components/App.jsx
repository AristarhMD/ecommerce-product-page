import { DataProivder } from "./DataContext";
import { Navigation } from "./Navigation";
import { MainContent } from "./MainContent";

function App() {
  return (
    <DataProivder>
      <Navigation />
      <MainContent />
    </DataProivder>
  );
}

export default App;
