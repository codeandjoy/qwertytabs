import PropTypes from "prop-types";
import NoteSet from "./NoteSet";
import "./css/TabLine.css";


const TabLine = ({ line }) => {
    return (
        <div className="tab-line">
            <div className="string-lines">
                <div className="string-line"></div>
                <div className="string-line"></div>
                <div className="string-line"></div>
                <div className="string-line"></div>
                <div className="string-line"></div>
                <div className="string-line"></div>
            </div>


            <div className="note-sets">
                {
                    line.lineData.map(set => 
                        <NoteSet key={ set.ID } set={ set }/>
                    )
                }
            </div>
        </div>
    );
}


TabLine.propTypes = {
    line: PropTypes.object.isRequired
}

export default TabLine;