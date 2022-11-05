import React, { useState, useEffect } from "react";
import "./Dropdown.scss";

const Dropdown = () => {
    const [dropdownState, setDropdownState] = useState(false);
    const [dropdownValue, setDropdownValue] = useState([{
        value: '男配音員', selected: true
    }, {
        value: '女配音員', selected: true
    }]);

    const handleDropdownClick = () => {
        setDropdownState(!dropdownState);
    };
    const handleSetDropdownValue = (value) => {

        const dropdownArr = dropdownValue.map(i => {
            if (i.value === value) {
                i.selected = false
            }
            return i;
        })
        setDropdownValue(dropdownArr);
        setDropdownState(!dropdownState);
    };

    return (
        <div className={`dropdown`}>
            <button onClick={handleDropdownClick} className="dropdown-btn">
                {dropdownValue === "" ? "Dropdown" : dropdownValue.map(i => i.value).join(';')}
                <svg style={{ float: "right" }} width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" d="M0.857178 1.59991L4.78574 7.59992L8.71431 1.59991" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div
                className={`dropdown-items ${dropdownState ? "isVisible" : "isHidden"
                    }`}
            >
                {dropdownValue.filter(i => i.selected).map((i) => (
                    <div key={i.value} className="dropdown-item">
                        <div
                            className="dropdown__link"
                            onClick={() => handleSetDropdownValue(i)}
                        >
                            {i.value}
                        </div>
                    </div>
                ))}
                {/*                 
                <div className="dropdown-item">
                    <div
                        className="dropdown__link"
                        onClick={() => handleSetDropdownValue("value 02")}
                    >
                        Item 02
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Dropdown;
