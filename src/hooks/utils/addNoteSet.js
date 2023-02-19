import { v4 as uuidv4 } from 'uuid';

const addNoteSet = (tabState, setContent) => {
    const newTabState = { ...tabState };

    newTabState.tabContent.notes[tabState.focusedLine].lineData.splice(
        tabState.focusedNoteSet+1, 
        0,
        {
            ID: uuidv4(),
            isNoteSetFocused: false,
            noteSetData: setContent
        }
    )

    return newTabState;
}

export default addNoteSet;