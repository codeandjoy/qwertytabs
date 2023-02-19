import changeFocus from "./changeFocus";
import removeLine from "./removeLine";

const removeNoteSet = (tabState) => {
    let newTabState = { ...tabState };

    // On last note set remove line
    if(tabState.tabContent.notes[tabState.focusedLine].lineData.length === 1){
        return removeLine(newTabState);
    }

    newTabState = changeFocus(newTabState, newTabState.focusedLine, newTabState.focusedNoteSet-1);
    newTabState.tabContent.notes[newTabState.focusedLine].lineData.splice(newTabState.focusedNoteSet+1, 1);

    return newTabState;
}

export default removeNoteSet;