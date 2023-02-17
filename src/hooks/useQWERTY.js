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
        if(key === 'q') toggleStringFocus(0);
        if(key === 'w') toggleStringFocus(1);
        if(key === 'e') toggleStringFocus(2);
        if(key === 'r') toggleStringFocus(3);
        if(key === 't') toggleStringFocus(4);
        if(key === 'y') toggleStringFocus(5);
    }

    return checkQWERTY;
}

export default useQWERTY;