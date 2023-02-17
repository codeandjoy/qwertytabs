import { useCallback, useEffect } from "react";
import useArrows from "./useArrows";
import useFrets from "./useFrets";
import useQWERTY from "./useQWERTY";

const useKeyboardShortcuts = (tabState, setTabState) => {
    const checkArrows = useArrows(tabState, setTabState);
    const checkQWERTY = useQWERTY(setTabState);
    const checkFretKeys = useFrets(tabState, setTabState);

    const handleKeydown = useCallback((event) => {
        if(event.repeat) return;

        checkArrows(event.key);        
        checkQWERTY(event.key);
        checkFretKeys(event.key);
    
    }, [checkArrows, checkQWERTY, checkFretKeys]);

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