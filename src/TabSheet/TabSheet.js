import TabContent from "./TabContent";
import "./css/TabSheet.css";
import { useCallback, useEffect, useState } from "react";

const TabSheet = () => {
    const [tabState, setTabState] = useState({
            focusedLine: 1,
            focusedNoteSet: 4,
            focusedStrings: [],
            tabContent: {
                name: "Tab",
                notes: [
                    [
                        ["0", "n", "n", "n", "n", "0"],
                        ["n", "n", "0", "n", "n", "n"],
                        ["n", "3", "n", "n", "n", "n"],
                        ["0", "n", "n", "n", "n", "n"],
                        ["0", "n", "n", "n", "n", "0"]
                    ],
                    [
                        ["0", "n", "n", "n", "n", "0"],
                        ["n", "n", "0", "n", "n", "n"],
                        ["n", "3", "n", "n", "n", "n"],
                        ["0", "n", "n", "n", "n", "n"],
                        ["0", "n", "n", "n", "n", "n"]
                    ],
                ]
            }
        }
    );

    console.log(tabState.focusedStrings);

    // Keyboard shortcuts
    const handleKeydown = useCallback((event) => {
        if(event.repeat) return;

        if(event.key === 'q'){
            console.log("Q down");
            setTabState((oldState) => { 
                return { ...oldState, focusedStrings: [ ...oldState.focusedStrings, 0 ] }
            });
        }
    }, []);

    const handleKeyup = useCallback((event) => {
        if(event.repeat) return;
        
        if(event.key === 'q'){
            console.log("Q up");
            setTabState((oldState) => {
                return { ...oldState, focusedStrings: [ ...oldState.focusedStrings.filter(string => string !== 0) ] }
            });
        }
    }, []);
    
    useEffect(() => {
        document.addEventListener('keypress', handleKeydown);
        document.addEventListener('keyup', handleKeyup);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
            document.removeEventListener('keyup', handleKeyup);
        }
    }, [handleKeydown, handleKeyup]);
    // 

    return (
        <div id="TabSheet">
            <h1 className="tab-name">{ tabState.tabContent.name }</h1>
            <TabContent content={ tabState.tabContent }/>
        </div>
    );
}

export default TabSheet;