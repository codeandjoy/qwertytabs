import { v4 as uuidv4 } from 'uuid';
import changeFocus from './changeFocus';

const addLine = (tabState) => {
    let newTabState = { ...tabState };

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

    newTabState = changeFocus(newTabState, newTabState.focusedLine+1, 0);

    return newTabState;
}

export default addLine;