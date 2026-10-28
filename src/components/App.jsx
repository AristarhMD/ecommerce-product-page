import { DataProivder } from "./DataContext";
import { Navigation } from "./Navigation";
import { MainContent } from "./MainContent";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";

function App() {
  return (
    <DataProivder>
      <Navigation />
      <MainContent />
    </DataProivder>
  );
}

export default App;
