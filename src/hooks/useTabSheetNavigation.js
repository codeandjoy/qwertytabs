import { useCallback } from "react";
import changeFocus from "./utils/changeFocus";

const useTabSheetNavigation = (tabState, setTabState) => {
    const changeTabFocus = useCallback((newFocusLine, newFocuseNoteSet) => {
        setTabState(changeFocus(tabState, newFocusLine, newFocuseNoteSet));
    }, [tabState, setTabState]);

    const moveLineUp = useCallback(() => {
        const currentFocusLine = tabState.focusedLine;
        const currentFocusNoteSet = tabState.focusedNoteSet;
        
        if(currentFocusLine === 0) return;

        if(currentFocusNoteSet > tabState.tabContent.notes[currentFocusLine-1].lineData.length-1){
            changeTabFocus(currentFocusLine-1, tabState.tabContent.notes[currentFocusLine-1].lineData.length-1);
        }
        else{
            changeTabFocus(currentFocusLine-1, currentFocusNoteSet);
        }
    }, [tabState, changeTabFocus]);

    const moveLineDown = useCallback(() => {
        const currentFocusLine = tabState.focusedLine;
        const currentFocusNoteSet = tabState.focusedNoteSet;

        if(currentFocusLine+1 > tabState.tabContent.notes.length-1) return;

        if(currentFocusNoteSet > tabState.tabContent.notes[currentFocusLine+1].lineData.length-1){
            changeTabFocus(currentFocusLine+1, tabState.tabContent.notes[currentFocusLine+1].lineData.length-1);
        }
        else{
            changeTabFocus(currentFocusLine+1, currentFocusNoteSet);
        }
    }, [tabState, changeTabFocus]);

    const moveSetLeft = useCallback(() => {
        const currentFocusLine = tabState.focusedLine;
        const currentFocusNoteSet = tabState.focusedNoteSet;

        if(currentFocusNoteSet === 0) return;

        changeTabFocus(currentFocusLine, currentFocusNoteSet-1);
    }, [tabState, changeTabFocus]);

    const moveSetRight = useCallback(() => {
        const currentFocusLine = tabState.focusedLine;
        const currentFocusNoteSet = tabState.focusedNoteSet;

        if(currentFocusNoteSet+1 > tabState.tabContent.notes[currentFocusLine].lineData.length-1) return;

        changeTabFocus(currentFocusLine, currentFocusNoteSet+1);
    }, [tabState, changeTabFocus]);

    return [moveLineUp, moveLineDown, moveSetLeft, moveSetRight];
}

export default useTabSheetNavigation;