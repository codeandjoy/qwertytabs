import changeFocus from "./changeFocus";

const removeLine = (tabState) => {
    let newTabState = { ...tabState };

    newTabState = changeFocus(newTabState, newTabState.focusedLine-1, newTabState.tabContent.notes[newTabState.focusedLine-1].lineData.length-1);
    newTabState.tabContent.notes.splice(newTabState.focusedLine+1, 1);

    return newTabState;
}

export default removeLine;