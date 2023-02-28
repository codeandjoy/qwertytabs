import { useContext } from "react";
import { TabSheetContext } from '../TabSheetContext/TabSheetContext';

const useDownload = () => {
    const [tabState,] = useContext(TabSheetContext);
    
    const download = () => {
        console.log('download');
    }

    return [download];
}

export default useDownload;
