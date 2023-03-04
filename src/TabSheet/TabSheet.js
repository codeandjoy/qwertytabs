import { useContext } from "react";
import AutosizeInput from "react-input-autosize";
import { motion } from 'framer-motion';
import { TabSheetContext } from "../TabSheetContext/TabSheetContext";
import { doChangeTabName } from "../state/TabSheetActionCreators";
import TabContent from "./TabContent";
import "./css/TabSheet.css";
import { fadeInSlow } from "../Animations/Animations";


const TabSheet = () => {
    const [tabState, dispatch] = useContext(TabSheetContext);

    return (
        <motion.div 
            variants={ fadeInSlow }
            initial='hidden'
            animate='show'

            id="TabSheet">
            <AutosizeInput
                className="tab-name"
                value={ tabState.tabContent.name }
                onChange={ (e) => { dispatch(doChangeTabName(e.target.value)) } }
            />
            {/* <h1 className="tab-name">{ tabState.tabContent.name }</h1> */}
            <TabContent/>
        </motion.div>
    );
}

export default TabSheet;