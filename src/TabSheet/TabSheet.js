import TabContent from "./TabContent";
import "./css/TabSheet.css";
import { useCallback, useContext, useEffect } from "react";
import { TabSheetContext } from "../TabSheetContext/TabSheetContext";

const TabSheet = () => {
    const [tabState, setTabState] = useContext(TabSheetContext);

    console.log(tabState);

    const changeFocus = useCallback((newFocusLine, newFocuseNoteSet) => {
        console.log("Change focus");
        setTabState((oldState) => {
            const newTabState = { ...oldState }

            const focusedLine = newTabState.focusedLine;
            const focusedNoteSet = newTabState.focusedNoteSet;

            // Remove old focus
            newTabState.tabContent.notes[focusedLine].isLineFocused = false;
            newTabState.tabContent.notes[focusedLine].lineData[focusedNoteSet].isNoteSetFocused = false;

            // Set new focus
            newTabState.tabContent.notes[newFocusLine].isLineFocused = true;
            newTabState.focusedLine = newFocusLine;

            newTabState.tabContent.notes[newFocusLine].lineData[newFocuseNoteSet].isNoteSetFocused = true;
            newTabState.focusedNoteSet = newFocuseNoteSet;
            
            return newTabState;
        })
    }, [setTabState]);

    const moveLineUp = useCallback(() => {
        const currentFocusLine = tabState.focusedLine;
        const currentFocusNoteSet = tabState.focusedNoteSet;
        
        if(currentFocusLine === 0) return;

        if(currentFocusNoteSet > tabState.tabContent.notes[currentFocusLine-1].lineData.length-1){
            changeFocus(currentFocusLine-1, tabState.tabContent.notes[currentFocusLine-1].lineData.length-1);
        }
        else{
            changeFocus(currentFocusLine-1, currentFocusNoteSet);
        }
    }, [tabState, changeFocus]);

    const moveLineDown = useCallback(() => {
        const currentFocusLine = tabState.focusedLine;
        const currentFocusNoteSet = tabState.focusedNoteSet;

        if(currentFocusLine+1 > tabState.tabContent.notes.length-1) return;

        changeFocus(currentFocusLine+1, currentFocusNoteSet);
    }, [tabState, changeFocus]);

    const moveSetLeft = useCallback(() => {
        const currentFocusLine = tabState.focusedLine;
        const currentFocusNoteSet = tabState.focusedNoteSet;

        if(currentFocusNoteSet === 0) return;

        changeFocus(currentFocusLine, currentFocusNoteSet-1);
    }, [tabState, changeFocus]);

    const moveSetRight = useCallback(() => {
        const currentFocusLine = tabState.focusedLine;
        const currentFocusNoteSet = tabState.focusedNoteSet;

        if(currentFocusNoteSet+1 > tabState.tabContent.notes[currentFocusLine].lineData.length-1) return;

        changeFocus(currentFocusLine, currentFocusNoteSet+1);
    }, [tabState, changeFocus])


    // Keyboard shortcuts
    const handleKeydown = useCallback((event) => {
        if(event.repeat) return;

        // up down - change line
        // left right - change note set
        if(event.key === 'ArrowUp'){
            moveLineUp();
        }
        else if(event.key === 'ArrowDown'){
            moveLineDown();
        }
        if(event.key === 'ArrowLeft'){
            moveSetLeft();
        }
        else if(event.key === 'ArrowRight'){
            moveSetRight();
        }

        if(event.key === 'q'){
            console.log("Q down");
            setTabState((oldState) => { 
                return { ...oldState, focusedStrings: [ ...oldState.focusedStrings, 0 ] }
            });
        }
    }, [setTabState, moveLineUp, moveLineDown, moveSetLeft, moveSetRight]);

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