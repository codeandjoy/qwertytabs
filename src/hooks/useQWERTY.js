import { useCallback } from "react";

const useQWERTY = (setTabState) => {
    const toggleStringFocus = useCallback((string) => {
        setTabState((oldState) => { 
            if(oldState.focusedStrings.includes(string)){
                return { ...oldState, focusedStrings: [ ...oldState.focusedStrings.filter(s => s !== string) ] }
            }
            return { ...oldState, focusedStrings: [ ...oldState.focusedStrings, string ] }
        });
    }, [setTabState]);

    const checkQWERTY = (key) =>{
        if(key === 'q') toggleStringFocus(5);
        if(key === 'w') toggleStringFocus(4);
        if(key === 'e') toggleStringFocus(3);
        if(key === 'r') toggleStringFocus(2);
        if(key === 't') toggleStringFocus(1);
        if(key === 'y') toggleStringFocus(0);
    }

    return checkQWERTY;
}

export default useQWERTY;