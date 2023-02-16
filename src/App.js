import Nav from "./Nav/Nav";
import CenteredContent from "./CenteredContent/CenteredContent";
import FocusPreview from "./FocusPreview/FocusPreview";
import TabSheet from "./TabSheet/TabSheet";
import { TabSheetContext } from "./TabSheetContext/TabSheetContext";
import FullScreenContent from "./FullScreenContent/FullScreenContent";
import useKeyboardShortcuts from "./hooks/useKeyboardShortcuts";
import { useContext } from "react";

const App = () => {
  const [tabState, setTabState] = useContext(TabSheetContext);
  useKeyboardShortcuts(tabState, setTabState);

  return (
    <FullScreenContent>
        <Nav/>
        <CenteredContent>
          <FocusPreview/>
          <TabSheet/>
        </CenteredContent>
    </FullScreenContent>
  );
}

export default App;
