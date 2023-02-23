import { useCallback, useContext } from "react";
import { doChangeFocusedLine, doChangeFocusedNoteSet } from "../state/TabSheetActionCreators";
import { TabSheetContext } from "../TabSheetContext/TabSheetContext";

const useTabSheetNavigation = () => {
    const [tabState, dispatch] = useContext(TabSheetContext);

    const moveLineUp = useCallback(() => {
        if(tabState.focusedLine === 0) return;

        if(tabState.focusedNoteSet > tabState.tabContent.notes[tabState.focusedLine-1].lineData.length-1){
            dispatch(doChangeFocusedLine(tabState.focusedLine-1));
            dispatch(doChangeFocusedNoteSet(tabState.tabContent.notes[tabState.focusedLine-1].lineData.length-1));
        }
        else{
            dispatch(doChangeFocusedLine(tabState.focusedLine-1));
        }
    }, [tabState, dispatch]);

    const moveLineDown = useCallback(() => {
        if(tabState.focusedLine+1 > tabState.tabContent.notes.length-1) return;

        if(tabState.focusedNoteSet > tabState.tabContent.notes[tabState.focusedLine+1].lineData.length-1){
            dispatch(doChangeFocusedLine(tabState.focusedLine+1));
            dispatch(doChangeFocusedNoteSet(tabState.tabContent.notes[tabState.focusedLine+1].lineData.length-1));
        }
        else{
            dispatch(doChangeFocusedLine(tabState.focusedLine+1));
        }
    }, [tabState, dispatch]);

    const moveSetLeft = useCallback(() => {
        if(tabState.focusedNoteSet === 0) return;

        dispatch(doChangeFocusedNoteSet(tabState.focusedNoteSet-1));
    }, [tabState, dispatch]);

    const moveSetRight = useCallback(() => {
        if(tabState.focusedNoteSet+1 > tabState.tabContent.notes[tabState.focusedLine].lineData.length-1) return;

        dispatch(doChangeFocusedNoteSet(tabState.focusedNoteSet+1));
    }, [tabState, dispatch]);

    return [moveLineUp, moveLineDown, moveSetLeft, moveSetRight];
}

export default useTabSheetNavigation;