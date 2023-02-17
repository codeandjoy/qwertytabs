import PropTypes from 'prop-types';
import { TabSheetContext } from '../TabSheetContext/TabSheetContext';
import { useContext } from 'react';
import renderNote from "./renderNote";
import "./css/NoteSet.css";


const NoteSet = ({ set }) => {
    const [tabState,] = useContext(TabSheetContext); 
    
    const noteSetClassName =  set.isNoteSetFocused ? 'note-set-focused ' : 'note-set';

    let noteClassNames = Array(6).fill('note')
    if(set.isNoteSetFocused){
        noteClassNames = noteClassNames.map((note, idx) => {
            if(tabState.focusedStrings.includes(idx)){
                return note + ' note-focused';
            }
            return note;
        });
    }

    return (
        <div className={ noteSetClassName }>
            <span className={ noteClassNames[0] }>{ renderNote(set.noteSetData[0]) }</span>
            <span className={ noteClassNames[1] }>{ renderNote(set.noteSetData[1]) }</span>
            <span className={ noteClassNames[2] }>{ renderNote(set.noteSetData[2]) }</span>
            <span className={ noteClassNames[3] }>{ renderNote(set.noteSetData[3]) }</span>
            <span className={ noteClassNames[4] }>{ renderNote(set.noteSetData[4]) }</span>
            <span className={ noteClassNames[5] }>{ renderNote(set.noteSetData[5]) }</span>
        </div>    
    );
}


NoteSet.propTypes = {
    set: PropTypes.object.isRequired
}

export default NoteSet;