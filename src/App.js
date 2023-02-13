import Nav from "./Nav/Nav";
import TabSheet from "./TabSheet/TabSheet";
import { TabSheetContextProvider } from "./TabSheetContext/TabSheetContext";

const App = () => {
  return (
    <div>
      <TabSheetContextProvider>
        <Nav/>
        <TabSheet/>
      </TabSheetContextProvider>
    </div>
  );
}

export default App;
