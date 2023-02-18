import { useCallback, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import useTabSheetNavigation from "./useTabSheetNavigation";
import useArrows from "./useArrows";
import useFrets from "./useFrets";
import useQWERTY from "./useQWERTY";

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

        // ! slow
        if(event.shiftKey && event.key === 'Enter'){
            setTabState(oldTabState => {
                const newTabState = { ...oldTabState };

                // Remove previous focus
                newTabState.tabContent.notes[oldTabState.focusedLine].isLineFocused = false;
                newTabState.tabContent.notes[oldTabState.focusedLine].lineData[oldTabState.focusedNoteSet].isNoteSetFocused = false;

                newTabState.tabContent.notes.splice(oldTabState.focusedLine+1, 0,
                    {
                        ID: uuidv4(),
                        isLineFocused: true,
                        lineData:[
                            {
                                ID: uuidv4(),
                                isNoteSetFocused: true,
                                noteSetData: Array(6).fill("n")
                            }
                        ]
                    }
                )

                newTabState.focusedLine += 1;
                newTabState.focusedNoteSet = 0;

                return newTabState;
            });
        }
        else if(event.key === 'Enter'){
            cleanFretBuffer();

            if(tabState.focusedNoteSet === tabState.tabContent.notes[tabState.focusedLine].lineData.length-1){
                setTabState(oldTabState => {
                    const newTabState = { ...oldTabState };

                    newTabState.tabContent.notes[tabState.focusedLine].lineData.push(
                        {
                            ID: uuidv4(),
                            isNoteSetFocused: false,
                            noteSetData: Array(6).fill("n")
                        }
                    )

                    return newTabState;
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