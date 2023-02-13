import PropTypes from 'prop-types';
import renderNote from "./renderNote";
import "./css/NoteSet.css";


const NoteSet = ({ set }) => {
    const noteSetClassName =  set.isNoteSetFocused ? 'note-set-focused ' : 'note-set';

    return (
        <div className={ noteSetClassName }>
            <span className='note'>{ renderNote(set.noteSetData[0]) }</span>
            <span className='note'>{ renderNote(set.noteSetData[1]) }</span>
            <span className='note'>{ renderNote(set.noteSetData[2]) }</span>
            <span className='note'>{ renderNote(set.noteSetData[3]) }</span>
            <span className='note'>{ renderNote(set.noteSetData[4]) }</span>
            <span className='note'>{ renderNote(set.noteSetData[5]) }</span>
        </div>    
    );
}


NoteSet.propTypes = {
    set: PropTypes.object.isRequired
}

export default NoteSet;