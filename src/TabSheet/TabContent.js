import { useContext } from 'react';
import { TabSheetContext } from '../TabSheetContext/TabSheetContext';
import TabLine from './TabLine';
import "./css/TabContent.css";


const TabContent = () => {
    const [tabState] = useContext(TabSheetContext);

    return (
        <div className="tab-content">
            {
                tabState.tabContent.notes.map(line => 
                    <TabLine key={ line.ID } line={ line }/>
                )
            }
        </div>
    );
}


export default TabContent;