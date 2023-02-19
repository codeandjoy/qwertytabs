import { useCallback, useEffect, useMemo } from "react";

const useFrets = (tabState, setTabState) => {
    const fretBuffer = useMemo(() => [], []);
    const cleanFretBuffer = useCallback(() => fretBuffer.length = 0, [fretBuffer]);

    const setFret = useCallback((fret) => {
        const newTabState = { ...tabState }; 
        
        tabState.focusedStrings.forEach(focusedString => {
            newTabState.tabContent.notes[tabState.focusedLine].lineData[tabState.focusedNoteSet].noteSetData[focusedString] = fret;
        });

        setTabState(newTabState);
    }, [tabState, setTabState]);

    useEffect(() => {
        if(!tabState.focusedStrings.length){
            cleanFretBuffer();
        } 
    }, [fretBuffer, cleanFretBuffer, tabState.focusedStrings]);

    const checkFretKeys = (key) => {
        if(/^[0-9]$/i.test(key)){
            fretBuffer.push(key.toString());
            setFret(fretBuffer.join(''));
        }
    }

    return [checkFretKeys, cleanFretBuffer];
}

export default useFrets;