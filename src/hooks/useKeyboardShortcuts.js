import { useCallback, useEffect } from "react";
import useTabSheetNavigation from "./useTabSheetNavigation";
import useArrows from "./useArrows";
import useFrets from "./useFrets";
import useQWERTY from "./useQWERTY";
import addNoteSet from "./utils/addNoteSet";
import addLine from "./utils/addLine";
import changeFocus from "./utils/changeFocus";

const useKeyboardShortcuts = (tabState, setTabState) => {
    const checkArrows = useArrows(tabState, setTabState);
    const checkQWERTY = useQWERTY(setTabState);
    const [checkFretKeys, cleanFretBuffer] = useFrets(tabState, setTabState);

    const [moveLineUp, moveLineDown, moveSetLeft, moveSetRight] = useTabSheetNavigation(tabState, setTabState);

    console.log(tabState);

    const handleKeydown = useCallback((event) => {
        if(event.repeat) return;

        checkArrows(event.key);        
        checkQWERTY(event.key);
        checkFretKeys(event.key);

        if(event.shiftKey && event.key === 'Enter'){
            setTabState(oldTabState => {
                let newTabState = addLine(oldTabState);
                newTabState = changeFocus(newTabState, newTabState.focusedLine+1, 0);

                return newTabState;
            });
        }
        else if(event.key === 'Enter'){
            cleanFretBuffer();

            if(tabState.focusedNoteSet === tabState.tabContent.notes[tabState.focusedLine].lineData.length-1){
                setTabState(oldTabState => {
                    return addNoteSet(oldTabState, Array(6).fill("n"));
                });
            }
            moveSetRight();
        }

    }, [checkArrows, checkQWERTY, checkFretKeys, cleanFretBuffer, moveSetRight, tabState, setTabState]);

    const handleKeyup = useCallback((event) => {
        if(event.repeat) return;
        
        checkQWERTY(event.key);

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