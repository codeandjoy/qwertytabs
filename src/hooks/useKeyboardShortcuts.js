import { useCallback, useEffect } from "react";
import useTabSheetNavigation from "./useTabSheetNavigation";

const useKeyboardShortcuts = (tabState, setTabState) => {
    const [moveLineUp, moveLineDown, moveSetLeft, moveSetRight] = useTabSheetNavigation(tabState, setTabState);

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
            // ! refactor
            setTabState((oldState) => { 
                return { ...oldState, focusedStrings: [ ...oldState.focusedStrings, 0 ] }
            });
        }
    }, [setTabState, moveLineUp, moveLineDown, moveSetLeft, moveSetRight]);

    const handleKeyup = useCallback((event) => {
        if(event.repeat) return;
        
        if(event.key === 'q'){
            console.log("Q up");
            // ! refactor
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
}

export default useKeyboardShortcuts;