import'./css/FocusPreview.css';
import StringPreview from './StringPreview';

const FocusPreview = () => {
    return (
        <div className="FocusPreview">
            <StringPreview string='Q' isFocused={ false }/>
            <StringPreview string='W' isFocused={ false }/>
            <StringPreview string='E' isFocused={ false }/>
            <StringPreview string='R' isFocused={ false }/>
            <StringPreview string='T' isFocused={ false }/>
            <StringPreview string='Y' isFocused={ false }/>
        </div>
    );
}

export default FocusPreview;