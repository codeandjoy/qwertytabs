import useTabSheetNavigation from "./useTabSheetNavigation";

const useArrows = (tabState, setTabState) => {
    const [moveLineUp, moveLineDown, moveSetLeft, moveSetRight] = useTabSheetNavigation(tabState, setTabState);

    const checkArrows = (key) => {
        if(key === 'ArrowUp') moveLineUp();
        else if(key === 'ArrowDown') moveLineDown();
        if(key === 'ArrowLeft') moveSetLeft();
        else if(key === 'ArrowRight') moveSetRight();
    }

    return checkArrows;
}

export default useArrows;