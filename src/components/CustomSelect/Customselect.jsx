import React, { useState } from "react";
import "./CustomSelect.css";

const CustomSelect = ({ options, placeholder, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onSelect) {
            onSelect(option);
        }
    };

    return (
        <div className="custom-select-container">
            <div
                className={`custom-select-trigger ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption ? selectedOption.label : placeholder}
                <span className={`arrow ${isOpen ? "active" : ""}`}><i className="fa-solid fa-chevron-down"></i></span>
            </div>
            {isOpen && (
                <div className="custom-select-options">
                    {options.map((option) => (
                        <div
                            key={option.id}
                            className={`custom-select-option ${selectedOption && selectedOption.value === option.id
                                ? "selected"
                                : ""
                                }`}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
