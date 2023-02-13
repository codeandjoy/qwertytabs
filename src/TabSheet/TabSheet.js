import TabContent from "./TabContent";
import "./css/TabSheet.css";
import { useCallback, useContext, useEffect } from "react";
import { TabSheetContext } from "../TabSheetContext/TabSheetContext";

const TabSheet = () => {
    const [tabState, setTabState] = useContext(TabSheetContext);

    console.log(tabState.focusedStrings);

    // Keyboard shortcuts
    const handleKeydown = useCallback((event) => {
        if(event.repeat) return;

        if(event.key === 'q'){
            console.log("Q down");
            setTabState((oldState) => { 
                return { ...oldState, focusedStrings: [ ...oldState.focusedStrings, 0 ] }
            });
        }
    }, [setTabState]);

    const handleKeyup = useCallback((event) => {
        if(event.repeat) return;
        
        if(event.key === 'q'){
            console.log("Q up");
            setTabState((oldState) => {
                return { ...oldState, focusedStrings: [ ...oldState.focusedStrings.filter(string => string !== 0) ] }
            });
        }
    }, [setTabState]);
    
    useEffect(() => {
        document.addEventListener('keypress', handleKeydown);
        document.addEventListener('keyup', handleKeyup);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
            document.removeEventListener('keyup', handleKeyup);
        }
    }, [handleKeydown, handleKeyup]);
    // 

    return (
        <div id="TabSheet">
            <h1 className="tab-name">{ tabState.tabContent.name }</h1>
            <TabContent/>
        </div>
    );
}

export default TabSheet;