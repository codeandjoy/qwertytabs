import { useCallback, useEffect } from "react";
import useArrows from "./useArrows";
import useFrets from "./useFrets";
import useQWERTY from "./useQWERTY";
import addNoteSet from "./utils/addNoteSet";
import addLine from "./utils/addLine";
import changeFocus from "./utils/changeFocus";

const useKeyboardShortcuts = (tabState, setTabState) => {
    const checkArrows = useArrows(tabState, setTabState);
    const checkQWERTY = useQWERTY(tabState, setTabState);
    const [checkFretKeys, cleanFretBuffer] = useFrets(tabState, setTabState);

    console.log(tabState);

    const handleKeydown = useCallback((event) => {
        if(event.repeat) return;

        checkArrows(event.key);        
        checkQWERTY(event.key);
        checkFretKeys(event.key);

        if(event.key === 'l'){
            let newTabState = addNoteSet(tabState, Array(6).fill("l")); 
            newTabState = changeFocus(newTabState, newTabState.focusedLine, newTabState.focusedNoteSet+1);
            
            setTabState(newTabState);
        }

        if(event.shiftKey && event.key === 'Enter'){
            let newTabState = addLine(tabState);
            newTabState = changeFocus(newTabState, newTabState.focusedLine+1, 0);

            setTabState(newTabState);
        }
        else if(event.key === 'Enter' || event.key === ' '){
            cleanFretBuffer();

            let newTabState = addNoteSet(tabState, Array(6).fill("n"));
            newTabState = changeFocus(newTabState, newTabState.focusedLine, newTabState.focusedNoteSet+1);
            
            setTabState(newTabState);
        }

    }, [checkArrows, checkQWERTY, checkFretKeys, cleanFretBuffer, tabState, setTabState]);

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