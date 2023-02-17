import { useCallback, useEffect } from "react";
import useTabSheetNavigation from "./useTabSheetNavigation";

const useKeyboardShortcuts = (tabState, setTabState) => {
    const [moveLineUp, moveLineDown, moveSetLeft, moveSetRight] = useTabSheetNavigation(tabState, setTabState);

    const toggleStringFocus = useCallback((string) => {
        setTabState((oldState) => { 
            if(oldState.focusedStrings.includes(string)){
                return { ...oldState, focusedStrings: [ ...oldState.focusedStrings.filter(s => s !== string) ] }
            }
            return { ...oldState, focusedStrings: [ ...oldState.focusedStrings, string ] }
        });
    }, [setTabState]);

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

        if(event.key === 'q') toggleStringFocus(0);
        if(event.key === 'w') toggleStringFocus(1);
        if(event.key === 'e') toggleStringFocus(2);
        if(event.key === 'r') toggleStringFocus(3);
        if(event.key === 't') toggleStringFocus(4);
        if(event.key === 'y') toggleStringFocus(5);

    }, [toggleStringFocus, moveLineUp, moveLineDown, moveSetLeft, moveSetRight]);

    const handleKeyup = useCallback((event) => {
        if(event.repeat) return;
        
        if(event.key === 'q') toggleStringFocus(0);
        if(event.key === 'w') toggleStringFocus(1);
        if(event.key === 'e') toggleStringFocus(2);
        if(event.key === 'r') toggleStringFocus(3);
        if(event.key === 't') toggleStringFocus(4);
        if(event.key === 'y') toggleStringFocus(5);

    }, [toggleStringFocus]);

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