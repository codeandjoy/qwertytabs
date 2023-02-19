import { useCallback } from "react";

const useQWERTY = (tabState, setTabState) => {
    const toggleStringFocus = useCallback((string) => {
        let newTabState = {};

        if(tabState.focusedStrings.includes(string)){
            newTabState = { ...tabState, focusedStrings: [ ...tabState.focusedStrings.filter(s => s !== string) ] }
        }
        else {
            newTabState = { ...tabState, focusedStrings: [ ...tabState.focusedStrings, string ] }
        }

        setTabState(newTabState);
    }, [tabState, setTabState]);

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