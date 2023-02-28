import PropTypes from 'prop-types';
import './css/NavBtn.css';



const NavBtn = ({ children, onClick, className='' }) => {
    return (
        <div 
            onClick={ onClick }
            className={ 'nav-btn' + className }>
            { children }
        </div>
    );
}



NavBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default NavBtn;