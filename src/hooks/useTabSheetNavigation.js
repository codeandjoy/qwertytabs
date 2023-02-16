import { useCallback } from "react";

const useTabSheetNavigation = (tabState, setTabState) => {
    const changeFocus = useCallback((newFocusLine, newFocuseNoteSet) => {
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
    }, [tabState, changeFocus]);

    return [moveLineUp, moveLineDown, moveSetLeft, moveSetRight];
}

export default useTabSheetNavigation;