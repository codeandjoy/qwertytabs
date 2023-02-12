import TabContent from "./TabContent";
import "./css/TabSheet.css";
import { useState } from "react";

const TabSheet = () => {
    const [tabContent, ] = useState(
        {
            name: "Tab",
            notes: [
                [
                    ["0", "n", "n", "n", "n", "0"],
                    ["n", "n", "0", "n", "n", "n"],
                    ["n", "3", "n", "n", "n", "n"],
                    ["0", "n", "n", "n", "n", "n"],
                    ["0", "n", "n", "n", "n", "0"]
                ],
                [
                    ["0", "n", "n", "n", "n", "0"],
                    ["n", "n", "0", "n", "n", "n"],
                    ["n", "3", "n", "n", "n", "n"],
                    ["0", "n", "n", "n", "n", "n"],
                    ["0", "n", "n", "n", "n", "n"]
                ],
            ]
        }
    );

    return (
        <div id="TabSheet">
            <h1 className="tab-name">{tabContent.name}</h1>
            <TabContent content={ tabContent }/>
        </div>
    );
}

export default TabSheet;