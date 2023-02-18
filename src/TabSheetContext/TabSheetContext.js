import { createContext, useState } from "react";

export const TabSheetContext = createContext();

export const TabSheetContextProvider = ({ children }) => {
    const [tabState, setTabState] = useState({
        focusedLine: 1,
        focusedNoteSet: 6,
        focusedStrings: [],
        tabContent: {
            name: "Tab",
            notes: [
                {
                    ID: "0",
                    isLineFocused: false,
                    lineData: [
                        {
                            ID: "00",
                            isNoteSetFocused: false,
                            noteSetData: ["0", "n", "n", "n", "n", "0"],
                        },
                        {
                            ID: "01",
                            isNoteSetFocused: false,
                            noteSetData: ["n", "n", "0", "n", "n", "n"],
                        },
                        {
                            ID: "02",
                            isNoteSetFocused: false,
                            noteSetData: ["n", "3", "n", "n", "n", "n"],
                        },
                        {
                            ID: "03",
                            isNoteSetFocused: false,
                            noteSetData: ["0", "n", "n", "n", "n", "n"],
                        },
                        {
                            ID: "04",
                            isNoteSetFocused: false,
                            noteSetData: ["0", "n", "n", "n", "n", "0"]
                        },
                    ]
                },
                {
                    ID: "1",
                    isLineFocused: true,
                    lineData: [
                        {
                            ID: "10",
                            isNoteSetFocused: false,
                            noteSetData: ["0", "n", "n", "n", "n", "0"],
                        },
                        {
                            ID: "11",
                            isNoteSetFocused: false,
                            noteSetData: ["n", "n", "0", "n", "n", "n"],
                        },
                        {
                            ID: "12",
                            isNoteSetFocused: false,
                            noteSetData: ["n", "3", "n", "n", "n", "n"],
                        },
                        {
                            ID: "13",
                            isNoteSetFocused: false,
                            noteSetData: ["0", "n", "n", "n", "n", "n"],
                        },
                        {
                            ID: "14",
                            isNoteSetFocused: false,
                            noteSetData: ["0", "n", "n", "n", "n", "0"]
                        },
                        {
                            ID: "15",
                            isNoteSetFocused: false,
                            noteSetData: ["0", "n", "n", "n", "n", "0"]
                        },
                        {
                            ID: "16",
                            isNoteSetFocused: true,
                            noteSetData: ["l", "l", "l", "l", "l", "l"]
                        },
                    ]
                },
            ]
        }
    });

    return (
        <TabSheetContext.Provider value={[ tabState, setTabState ]}>
            { children }
        </TabSheetContext.Provider>
    );
}