import Nav from "./Nav/Nav";
import CenteredContent from "./CenteredContent/CenteredContent";
import FocusPreview from "./FocusPreview/FocusPreview";
import TabSheet from "./TabSheet/TabSheet";
import { TabSheetContextProvider } from "./TabSheetContext/TabSheetContext";
import FullScreenContent from "./FullScreenContent/FullScreenContent";

const App = () => {
  return (
    <FullScreenContent>
      <TabSheetContextProvider>
        <Nav/>
        <CenteredContent>
          <FocusPreview/>
          <TabSheet/>
        </CenteredContent>
      </TabSheetContextProvider>
    </FullScreenContent>
  );
}

export default App;
