import React, { useState, useEffect } from "react";
import "./Dropdown.scss";

const Dropdown = () => {
    const [dropdownState, setDropdownState] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("");

    const handleDropdownClick = () => {
        setDropdownState(!dropdownState);
    };
    const handleSetDropdownValue = (value) => {
        setDropdownValue(value);
        setDropdownState(!dropdownState);
    };

    return (
        <div className={`dropdown`}>
            <button onClick={handleDropdownClick} className="dropdown-btn">
                {dropdownValue === "" ? "Dropdown" : dropdownValue}
            </button>
            <div
                className={`dropdown-items ${dropdownState ? "isVisible" : "isHidden"
                    }`}
            >
                <div className="dropdown-item">
                    <div
                        className="dropdown__link"
                        onClick={() => handleSetDropdownValue("value 01")}
                    >
                        Item 01
                    </div>
                </div>
                <div className="dropdown-item">
                    <div
                        className="dropdown__link"
                        onClick={() => handleSetDropdownValue("value 02")}
                    >
                        Item 02
                    </div>
                </div>
                <div className="dropdown-item">
                    <div
                        className="dropdown__link"
                        onClick={() => handleSetDropdownValue("value 03")}
                    >
                        Item 03
                    </div>
                </div>
                <div className="dropdown-item">
                    <div
                        className="dropdown__link"
                        onClick={() => handleSetDropdownValue("value 04")}
                    >
                        Item 04
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
