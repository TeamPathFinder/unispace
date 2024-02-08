// FilterOption.js
import React from 'react';
import '../Internship.css'

const FilterOption = ({ id, label, isChecked, onChange, type}) => {
    return (

        <label className={`custom-checkbox-label ${isChecked ? 'checked' : ''}`} htmlFor={`${id}-${type}`}> {label}
            <input
                type="checkbox"
                id={`${id}-${type}`}
                checked={isChecked}
                onChange={onChange} />
            <span class="custom-checkbox" />
        </label>

    );
};

export default FilterOption;


