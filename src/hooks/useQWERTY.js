import { useContext } from "react";
import { doToggleStringFocus } from "../state/TabSheetActionCreators";
import { TabSheetContext } from "../TabSheetContext/TabSheetContext";

const useQWERTY = () => {
    const [,dispatch] = useContext(TabSheetContext);

    return (event) =>{
        if(event.key === 'q') dispatch(doToggleStringFocus(5));
        if(event.key === 'w') dispatch(doToggleStringFocus(4));
        if(event.key === 'e') dispatch(doToggleStringFocus(3));
        if(event.key === 'r') dispatch(doToggleStringFocus(2));
        if(event.key === 't') dispatch(doToggleStringFocus(1));
        if(event.key === 'y') dispatch(doToggleStringFocus(0));
    }
}

export default useQWERTY;