import { useCallback, useContext, useEffect, useMemo } from "react";
import { doSetFret } from "../state/TabSheetActionCreators";
import { TabSheetContext } from "../TabSheetContext/TabSheetContext";

const useFrets = () => {
    const [tabState, dispatch] = useContext(TabSheetContext);

    const fretBuffer = useMemo(() => [], []);
    const cleanFretBuffer = useCallback(() => fretBuffer.length = 0, [fretBuffer]);

    useEffect(() => {
        if(!tabState.focusedStrings.length){
            cleanFretBuffer();
        } 
    }, [tabState, fretBuffer, cleanFretBuffer]);

    const checkFretKeys = (event) => {
        if(/^[0-9]$/i.test(event.key)){
            fretBuffer.push(event.key.toString());
            dispatch(doSetFret(fretBuffer.join('')));
        }
    }

    return [checkFretKeys, cleanFretBuffer];
}

export default useFrets;