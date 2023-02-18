import { v4 as uuidv4 } from 'uuid';

const addLine = (tabState) => {
    const newTabState = { ...tabState };

    newTabState.tabContent.notes.splice(tabState.focusedLine+1, 0,
        {
            ID: uuidv4(),
            isLineFocused: true,
            lineData:[
                {
                    ID: uuidv4(),
                    isNoteSetFocused: true,
                    noteSetData: Array(6).fill("n")
                }
            ]
        }
    )

    return newTabState;
}

export default addLine;