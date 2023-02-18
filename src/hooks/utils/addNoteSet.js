import { v4 as uuidv4 } from 'uuid';

const addNoteSet = (tabState, setContent) => {
    const newTabState = { ...tabState };

    newTabState.tabContent.notes[tabState.focusedLine].lineData.push(
        {
            ID: uuidv4(),
            isNoteSetFocused: false,
            noteSetData: setContent
        }
    )

    return newTabState;
}

export default addNoteSet;