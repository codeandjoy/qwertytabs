import { v4 as uuidv4 } from 'uuid';

const TabSheetReducer = (state, action) => {
    if(action.type === 'set_fret'){
        const newTabState = { ...state }; 
        
        state.focusedStrings.forEach(focusedString => {
            newTabState.tabContent.notes[state.focusedLine].lineData[state.focusedNoteSet].noteSetData[focusedString] = action.payload;
        });

        return newTabState;
    }

    if(action.type === 'toggle_string_focus'){
        if(state.focusedStrings.includes(action.payload)){
            return { ...state, focusedStrings: [ ...state.focusedStrings.filter(s => s !== action.payload) ] };
        }
        else {
            return { ...state, focusedStrings: [ ...state.focusedStrings, action.payload ] };
        }
    }

    if(action.type === 'change_focused_line'){
        console.log('here');
        const newTabState = { ...state };
        
        if(action.payload === -1) return newTabState;
        if(action.payload > state.tabContent.notes.length-1) return newTabState;
 
        newTabState.tabContent.notes[state.focusedLine].isLineFocused = false;

        newTabState.tabContent.notes[action.payload].isLineFocused = true;
        newTabState.focusedLine = action.payload;

        // Validate focusedNoteSet
        let newFocusedNoteSetIdx;
        if(state.focusedNoteSet > state.tabContent.notes[action.payload].lineData.length-1){
            newFocusedNoteSetIdx = state.tabContent.notes[action.payload].lineData.length-1;
        }
        else{
            newFocusedNoteSetIdx = state.focusedNoteSet;
        }
        
        newTabState.tabContent.notes[state.focusedLine].lineData[state.focusedNoteSet].isNoteSetFocused = false;

        newTabState.tabContent.notes[action.payload].lineData[newFocusedNoteSetIdx].isNoteSetFocused = true;
        newTabState.focusedNoteSet = newFocusedNoteSetIdx;
        //

        return newTabState;
    }

    if(action.type === 'change_focused_note_set'){
        const newTabState = { ...state }

        if(action.payload === -1) return newTabState;
        if(action.payload > state.tabContent.notes[state.focusedLine].lineData.length-1) return newTabState;

        newTabState.tabContent.notes[state.focusedLine].lineData[state.focusedNoteSet].isNoteSetFocused = false;

        newTabState.tabContent.notes[state.focusedLine].lineData[action.payload].isNoteSetFocused = true;
        newTabState.focusedNoteSet = action.payload;

        return newTabState;
    }

    if(action.type === 'add_line'){
        const newTabState = { ...state };

        newTabState.tabContent.notes.splice(state.focusedLine+1, 0,
            {
                ID: uuidv4(),
                isLineFocused: false,
                lineData:[
                    {
                        ID: uuidv4(),
                        isNoteSetFocused: false,
                        noteSetData: Array(6).fill("n")
                    }
                ]
            }
        );

        return newTabState;
    }

    if(action.type === 'remove_line'){
        const newTabState = { ...state };

        newTabState.tabContent.notes.splice(action.payload, 1);

        return newTabState;
    }

    if(action.type === 'add_note_set'){
        const newTabState = { ...state };

        newTabState.tabContent.notes[state.focusedLine].lineData.splice(state.focusedNoteSet+1, 0,
            {
                ID: uuidv4(),
                isNoteSetFocused: false,
                noteSetData: action.payload
            }
        );

        return newTabState;
    }

    if(action.type === 'remove_note_set'){
        const newTabState = { ...state };

        newTabState.tabContent.notes[state.focusedLine].lineData.splice(action.payload, 1);
        
        return newTabState;
    }
}

export default TabSheetReducer;