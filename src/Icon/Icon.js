import PropTypes from 'prop-types';
import './css/Icon.css';



const Icon = ({ type }) => {
    return (
        <div className={ 'icon icon-' + type }></div>
    );
}



Icon.propTypes = {
    type: PropTypes.oneOf(['logo', 'download', 'load', 'info']).isRequired
}

export default Icon;