import PropTypes from 'prop-types';
import renderNote from "./renderNote";
import "./css/NoteSet.css";


const NoteSet = ({ set }) => {
    return (
        <div className='note-set'>
            <span className='note'>{ renderNote(set[0]) }</span>
            <span className='note'>{ renderNote(set[1]) }</span>
            <span className='note'>{ renderNote(set[2]) }</span>
            <span className='note'>{ renderNote(set[3]) }</span>
            <span className='note'>{ renderNote(set[4]) }</span>
            <span className='note'>{ renderNote(set[5]) }</span>
        </div>    
    );
}


NoteSet.propTypes = {
    set: PropTypes.array.isRequired
}

export default NoteSet;