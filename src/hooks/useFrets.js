import { useCallback, useEffect, useMemo } from "react";

const useFrets = (tabState, setTabState) => {
    const setFret = useCallback((fret) => {
        setTabState((oldState) => {
            const newState = { ...oldState };
            
            oldState.focusedStrings.forEach(focusedString => {
                newState.tabContent.notes[oldState.focusedLine].lineData[oldState.focusedNoteSet].noteSetData[focusedString] = fret;
            });

            return newState;
        });
    }, [setTabState]);

    const fretBuffer = useMemo(() => [], []);
    useEffect(() => {
        if(!tabState.focusedStrings.length){
            fretBuffer.length = 0;
        } 
    }, [fretBuffer, tabState.focusedStrings]);

    const checkFretKeys = (key) => {
        if(/^[0-9]$/i.test(key)){
            fretBuffer.push(key.toString());
            setFret(fretBuffer.join(''));
        }
    }

    return checkFretKeys;
}

export default useFrets;