import Nav from "./Nav/Nav";
import CenteredContent from "./CenteredContent/CenteredContent";
import TabSheet from "./TabSheet/TabSheet";
import { TabSheetContextProvider } from "./TabSheetContext/TabSheetContext";
import FullScreenContent from "./FullScreenContent/FullScreenContent";

const App = () => {
  return (
    <FullScreenContent>
      <TabSheetContextProvider>
        <Nav/>
        <CenteredContent>
          <TabSheet/>
        </CenteredContent>
      </TabSheetContextProvider>
    </FullScreenContent>
  );
}

export default App;
