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
    const handleSetDropdownValue = (selectedItem) => {
        console.log(selectedItem);
        const dropdownArr = dropdownValue.map(i => {
            if (i.value === selectedItem.value) {
                i.selected = !i.selected
            }
            return i;
        })
        setDropdownValue(dropdownArr);
        setDropdownState(!dropdownState);
    };

    return (
        <div className={`dropdown`}>
            <button onClick={handleDropdownClick} className="dropdown-btn">
                {dropdownValue === "" ? "Dropdown" : dropdownValue.filter(i => i.selected).map(i => i.value).join(';')}
                <svg style={{ float: "right" }} width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" d="M0.857178 1.59991L4.78574 7.59992L8.71431 1.59991" stroke="black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div
                className={`dropdown-items ${dropdownState ? "isVisible" : "isHidden"
                    }`}
            >
                {dropdownValue.map((i, index) => (
                    <div key={index} className="dropdown-item">
                        <div
                            className="dropdown__link"
                            onClick={() => handleSetDropdownValue(i)}
                        >
                            {i.value}
                            {i.selected ?
                                <svg style={{ float: "right" }} width="20" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="20" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 " clip-rule="nonzero" /></clipPath></defs><g clip-path="url(#id1)"><path fill="rgb(13.729858%, 12.159729%, 12.548828%)" d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero" /></g></svg> : null}

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;
