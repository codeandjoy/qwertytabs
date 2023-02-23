import Nav from "./Nav/Nav";
import CenteredContent from "./CenteredContent/CenteredContent";
import FocusPreview from "./FocusPreview/FocusPreview";
import TabSheet from "./TabSheet/TabSheet";
import FullScreenContent from "./FullScreenContent/FullScreenContent";
import useKeyboardShortcuts from "./hooks/useKeyboardShortcuts";

const App = () => {
  useKeyboardShortcuts();

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
