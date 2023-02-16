import TabContent from "./TabContent";
import "./css/TabSheet.css";
import { useContext } from "react";
import { TabSheetContext } from "../TabSheetContext/TabSheetContext";

const TabSheet = () => {
    const [tabState,] = useContext(TabSheetContext);

    return (
        <div id="TabSheet">
            <h1 className="tab-name">{ tabState.tabContent.name }</h1>
            <TabContent/>
        </div>
    );
}

export default TabSheet;