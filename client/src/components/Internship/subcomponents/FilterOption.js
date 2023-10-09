// FilterOption.js
import React from 'react';
import '../Internship.css'

const FilterOption = ({ id, label, isChecked, onChange }) => {
    return (

        <label className={`custom-checkbox-label ${isChecked ? 'checked' : ''}`} htmlFor={id}> {label}
            <input
                type="checkbox"
                id={id}
                checked={isChecked}
                onChange={onChange} />
            <span class="custom-checkbox" />
        </label>

    );
};

export default FilterOption;


