import { useContext } from "react";
import { TabSheetContext } from "../TabSheetContext/TabSheetContext";
import AutosizeInput from "react-input-autosize";
import { doChangeTabName } from "../state/TabSheetActionCreators";
import TabContent from "./TabContent";
import "./css/TabSheet.css";


const TabSheet = () => {
    const [tabState, dispatch] = useContext(TabSheetContext);

    return (
        <div id="TabSheet">
            <AutosizeInput
                className="tab-name"
                value={ tabState.tabContent.name }
                onChange={ (e) => { dispatch(doChangeTabName(e.target.value)) } }
            />
            {/* <h1 className="tab-name">{ tabState.tabContent.name }</h1> */}
            <TabContent/>
        </div>
    );
}

export default TabSheet;