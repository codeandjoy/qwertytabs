import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fadeIn } from '../Animations/Animations';
import './css/StringPreview.css';


const StringPreview = ({ string, isFocused }) => {
    const className = isFocused ? 'string-preview-focused' : 'string-preview';

    return (
        <motion.div 
            variants={ fadeIn }

            className={ className }>
            <span>{ string }</span>
        </motion.div>
    );
}


StringPreview.propTypes = {
    string: PropTypes.string.isRequired,
    isFocused: PropTypes.bool.isRequired
}

export default StringPreview;