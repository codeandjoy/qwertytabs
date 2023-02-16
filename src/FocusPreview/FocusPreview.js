import { useContext } from 'react';
import { TabSheetContext } from '../TabSheetContext/TabSheetContext';
import StringPreview from './StringPreview';
import'./css/FocusPreview.css';

const FocusPreview = () => {
    const [tabState,] = useContext(TabSheetContext);

    return (
        <div className="FocusPreview">
            <StringPreview string='Q' isFocused={ tabState.focusedStrings.includes(0) }/>
            <StringPreview string='W' isFocused={ tabState.focusedStrings.includes(1) }/>
            <StringPreview string='E' isFocused={ tabState.focusedStrings.includes(2) }/>
            <StringPreview string='R' isFocused={ tabState.focusedStrings.includes(3) }/>
            <StringPreview string='T' isFocused={ tabState.focusedStrings.includes(4) }/>
            <StringPreview string='Y' isFocused={ tabState.focusedStrings.includes(5) }/>
        </div>
    );
}

export default FocusPreview;