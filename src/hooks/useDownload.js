import { useContext } from "react";
import { TabSheetContext } from '../TabSheetContext/TabSheetContext';

const transpose = (matrix) => {
    const newMatrix = [];

    // Init
    for(let i = 0; i < 6; i++){
        newMatrix.push(Array(matrix.length).fill('dummy'));
    }

    // Transpose
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            newMatrix[j][i] = matrix[i][j];
        }
    }

    return newMatrix;
}

const paintNotes = (matrix) => {
    return matrix
        .map(row => [ 'n', ...row ])
        .map(row => [ ...row, 'n' ])
        .map(row  => {
            return row.map(col => {
                if(col === 'n') return '---';
                if(col === 'l') return '|--';
                if(col.length === 2) return col+'-';
                return col+'--';
            })
        });
}

const createStringsOfNotes = (matrix) => {
    const newMatrix = [];

    matrix.forEach(string => {
        newMatrix.push(string.join(''));
    });

    return newMatrix;
}

const useDownload = () => {
    const [tabState,] = useContext(TabSheetContext);
    
    const download = () => {
        const noteSets = [];
        const lines = [];

        tabState.tabContent.notes.forEach(line => {
            line.lineData.forEach(noteSet => {
                noteSets.push(noteSet.noteSetData);
            });

            lines.push(createStringsOfNotes(paintNotes(transpose(noteSets))).join('\n'));

            noteSets.length = 0;
        });

        let tabSheet = lines.join('\n\n');
        tabSheet = tabState.tabContent.name+'\n\n' + tabSheet;
        console.log(tabSheet);

        // Download
        const blob = new Blob([tabSheet], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = tabState.tabContent.name+'.txt';
        link.href = url;
        link.click();
        link.remove();
        //
    }

    return [download];
}

export default useDownload;
