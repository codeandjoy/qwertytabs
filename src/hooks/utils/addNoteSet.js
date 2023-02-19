import { v4 as uuidv4 } from 'uuid';
import changeFocus from './changeFocus';

const addNoteSet = (tabState, setContent) => {
    let newTabState = { ...tabState };

    newTabState.tabContent.notes[tabState.focusedLine].lineData.splice(
        tabState.focusedNoteSet+1, 
        0,
        {
            ID: uuidv4(),
            isNoteSetFocused: false,
            noteSetData: setContent
        }
    )

    newTabState = changeFocus(newTabState, newTabState.focusedLine, newTabState.focusedNoteSet+1);

    return newTabState;
}

export default addNoteSet;