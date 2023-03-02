export const doChangeTabName = (newName) => {
    return { type: 'change_tab_name', payload: newName };
}

export const doSetFret = (fret) => {
    return { type: 'set_fret', payload: fret };
}

export const doToggleStringFocus = (string) => {
    return { type: 'toggle_string_focus', payload: string };
}

export const doChangeFocusedLine = (newLineIdx) => {
    return { type: 'change_focused_line', payload: newLineIdx };
}

export const doChangeFocusedNoteSet = (newNoteSetIdx) => {
    return { type: 'change_focused_note_set', payload: newNoteSetIdx };
}

export const doAddLine = () => {
    return { type: 'add_line' };
}

export const doRemoveLine = (lineIdx) => {
    return { type: 'remove_line', payload: lineIdx };
}

export const doAddNoteSet = (content) => {
    return { type: 'add_note_set', payload: content };
}

export const doRemoveNoteSet = (noteSetIdx) => {
    return { type: 'remove_note_set', payload: noteSetIdx };
}