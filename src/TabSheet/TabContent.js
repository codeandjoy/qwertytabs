import PropTypes from 'prop-types';
import "./css/TabContent.css";
import TabLine from './TabLine';


const TabContent = ({ content }) => {
    return (
        <div className="tab-content">
            {
                content.notes.map(line => 
                    <TabLine line={ line }/>
                )
            }
        </div>
    );
}


TabContent.propTypes = {
    content: PropTypes.array.isRequired
}

export default TabContent;