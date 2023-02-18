const changeFocus = (tabState, newFocusLine, newFocuseNoteSet) => {
    const newTabState = { ...tabState };

    const focusedLine = newTabState.focusedLine;
    const focusedNoteSet = newTabState.focusedNoteSet;

    // Remove old focus
    newTabState.tabContent.notes[focusedLine].isLineFocused = false;
    newTabState.tabContent.notes[focusedLine].lineData[focusedNoteSet].isNoteSetFocused = false;

    // Set new focus
    newTabState.tabContent.notes[newFocusLine].isLineFocused = true;
    newTabState.focusedLine = newFocusLine;

    newTabState.tabContent.notes[newFocusLine].lineData[newFocuseNoteSet].isNoteSetFocused = true;
    newTabState.focusedNoteSet = newFocuseNoteSet;
    
    return newTabState;
}

export default changeFocus;