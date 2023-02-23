import { useCallback, useContext, useEffect } from "react";
import useFrets from "./useFrets";
import useQWERTY from "./useQWERTY";
import { doAddLine, doAddNoteSet, doChangeFocusedLine, doChangeFocusedNoteSet, doRemoveLine, doRemoveNoteSet } from "../state/TabSheetActionCreators";
import { TabSheetContext } from "../TabSheetContext/TabSheetContext";

const useKeyboardShortcuts = () => {
    const [tabState, dispatch] = useContext(TabSheetContext);

    const checkQWERTY = useQWERTY();
    const [checkFretKeys, cleanFretBuffer] = useFrets();

    console.log(tabState);

    const handleKeydown = useCallback((event) => {
        if(event.repeat) return;

        checkQWERTY(event);
        checkFretKeys(event);

        if(event.key === 'ArrowUp') dispatch(doChangeFocusedLine(tabState.focusedLine-1));
        else if(event.key === 'ArrowDown') dispatch(doChangeFocusedLine(tabState.focusedLine+1));
        if(event.key === 'ArrowLeft') dispatch(doChangeFocusedNoteSet(tabState.focusedNoteSet-1));
        else if(event.key === 'ArrowRight') dispatch(doChangeFocusedNoteSet(tabState.focusedNoteSet+1));

        if(event.key === 'l'){
            console.log('here');
            dispatch(doAddNoteSet(Array(6).fill('l')));
            dispatch(doChangeFocusedNoteSet(tabState.focusedNoteSet+1));
        }

        if(event.key === 'Enter') {
            cleanFretBuffer();
            dispatch(doAddLine());
            dispatch(doChangeFocusedLine(tabState.focusedLine+1));
        }
        
        if(event.key === ' '){
            cleanFretBuffer();
            dispatch(doAddNoteSet(Array(6).fill('n')));
            dispatch(doChangeFocusedNoteSet(tabState.focusedNoteSet+1));
        }

        if(event.shiftKey && event.key === 'Backspace'){
            dispatch(doChangeFocusedLine(tabState.focusedLine-1));
            dispatch(doRemoveLine(tabState.focusedLine));

        }        
        else if(event.key === 'Backspace'){
            if(tabState.tabContent.notes[tabState.focusedLine].lineData.length === 1){
                dispatch(doChangeFocusedLine(tabState.focusedLine-1));
                dispatch(doRemoveLine(tabState.focusedLine));
            }
            else{
                dispatch(doChangeFocusedNoteSet(tabState.focusedNoteSet-1));
                dispatch(doRemoveNoteSet(tabState.focusedNoteSet));
            }
        }

    }, [tabState, dispatch, checkQWERTY, checkFretKeys, cleanFretBuffer]);

    const handleKeyup = useCallback((event) => {
        if(event.repeat) return;
        
        checkQWERTY(event);

    }, [checkQWERTY]);
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeydown);
        document.addEventListener('keyup', handleKeyup);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
            document.removeEventListener('keyup', handleKeyup);
        }
    }, [handleKeydown, handleKeyup]);
}

export default useKeyboardShortcuts;