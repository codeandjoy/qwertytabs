import PropTypes from 'prop-types';
import './css/StringPreview.css';


const StringPreview = ({ string, isFocused }) => {
    const className = isFocused ? 'string-preview-focused' : 'string-preview';

    return (
        <div className={ className }>
            <span>{ string }</span>
        </div>
    );
}


StringPreview.propTypes = {
    string: PropTypes.string.isRequired,
    isFocused: PropTypes.bool.isRequired
}

export default StringPreview;