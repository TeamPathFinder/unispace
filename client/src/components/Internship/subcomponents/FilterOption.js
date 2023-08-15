// FilterOption.js
import React from 'react';

const FilterOption = ({ id, label, isChecked, onChange }) => {
    return (
        <div className='flex fd-row filter-option'>
            <input
                type="checkbox"
                id={id}
                checked={isChecked}
                onChange={onChange}
                style={{ borderRadius: '0', marginRight: '10px' }} />
            <label htmlFor={id} style={{color: 'rgba(0,0,0,0.6)'}}>{label}</label>
        </div>
    );
};

export default FilterOption;
