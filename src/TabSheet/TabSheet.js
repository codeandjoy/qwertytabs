import TabContent from "./TabContent";
import "./css/TabSheet.css";
import { useCallback, useContext, useEffect } from "react";
import { TabSheetContext } from "../TabSheetContext/TabSheetContext";

const TabSheet = () => {
    const [tabState, setTabState] = useContext(TabSheetContext);

    console.log(tabState);

    const changeFocus = useCallback((newFocusLine, newFocuseNoteSet) => {
        // Reality checks
        if(newFocusLine < 0 || newFocusLine > tabState.tabContent.notes.length-1) return;
        if(newFocuseNoteSet < 0 || newFocuseNoteSet > tabState.tabContent.notes[newFocusLine].lineData.length-1) return;

        setTabState((oldState) => {
            const newTabState = { ...oldState }

            const focusedLine = newTabState.focusedLine;
            const focusedNoteSet = newTabState.focusedNoteSet;

            // Remove old focus
            newTabState.tabContent.notes[focusedLine].isLineFocused = false;
            newTabState.tabContent.notes[focusedLine].lineData[focusedNoteSet].isNoteSetFocused = false;

            // Set new focus
            newTabState.tabContent.notes[newFocusLine].isLineFocused = true;
            newTabState.tabContent.notes[newFocusLine].lineData[newFocuseNoteSet].isNoteSetFocused = true;
            
            // Update guides
            newTabState.focusedLine = newFocusLine;
            newTabState.focusedNoteSet = newFocuseNoteSet;

            return newTabState;
        })
    }, [setTabState, tabState]);

    // Keyboard shortcuts
    const handleKeydown = useCallback((event) => {
        if(event.repeat) return;

        // up down - change line
        // left right - change note set
        if(event.key === 'ArrowLeft'){
            changeFocus(tabState.focusedLine, tabState.focusedNoteSet-1);
        }
        else if(event.key === 'ArrowRight'){
            changeFocus(tabState.focusedLine, tabState.focusedNoteSet+1);
        }

        if(event.key === 'q'){
            console.log("Q down");
            setTabState((oldState) => { 
                return { ...oldState, focusedStrings: [ ...oldState.focusedStrings, 0 ] }
            });
        }
    }, [setTabState, changeFocus, tabState]);

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
        document.addEventListener('keydown', handleKeydown);
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