import './css/CenteredContent.css';

const CenteredContent = ({ children }) => {
    return (
        <div className="centered-content">
            { children }
        </div>
    );
}

export default CenteredContent;