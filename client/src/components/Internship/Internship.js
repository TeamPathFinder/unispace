import { useState } from 'react';
import './Internship.css'
import FilterOption from './subcomponents/FilterOption';
import Searchbar from './subcomponents/Searchbar';
import InternshipListing from './subcomponents/InternshipListing';

const Internship = () => {

    const [filterOptions, setFilterOptions] = useState([
        { id: 'toronto', label: 'Toronto', isChecked: false },
        { id: 'vancouver', label: 'Vancouver', isChecked: false },
        { id: 'quebec', label: 'Quebec', isChecked: false },
        { id: 'ottawa', label: 'Ottawa', isChecked: false },
        { id: 'canadaOther', label: 'Other', isChecked: false },
        { id: 'newyorkcity', label: 'New York City', isChecked: false },
        { id: 'boston', label: 'Boston', isChecked: false },
        { id: 'washingtondc.', label: 'Washington D.C.', isChecked: false },
        { id: 'chicago', label: 'Chicago', isChecked: false },
        { id: 'usOther', label: 'Other', isChecked: false },
        { id: 'Seoul', label: 'Seoul', isChecked: false },
        { id: 'koreaOther', label: 'Other', isChecked: false }
        // Add more filter options here
    ]);

    const [search, setSearch] = useState("");

    const handleFilterChange = (id) => {
        //TODO: axios call here later at some point

        setFilterOptions((prevOptions) =>
            prevOptions.map((option) =>
                option.id === id ? { ...option, isChecked: !option.isChecked } : option
            )
        );

    };

    const renderFilterList = (index_start, index_end) => {
        return (
            filterOptions.slice(index_start, index_end).map((option) => (
                <FilterOption
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    isChecked={option.isChecked}
                    onChange={() => handleFilterChange(option.id)}
                />
            ))
        );
    }

    return (
        <div className="internship-container flex fd-col">
            <div className="flex fd-col internship-content-container">
                <div className="flex fd-col internship-header-container">
                    <h2> 인턴쉽 </h2>
                    <a> 다가오는 2024 하계 인턴십을 위한 space </a>
                </div>
                <div className='internship-grid'>
                    <div className='internship-filter-col flex fd-col'>
                        <div className='flex fd-col internship-filter-container'>
                            <a> Canada </a>
                            {renderFilterList(0, 4)}
                            <a> USA </a>
                            {renderFilterList(5, 10)}
                            <a> Korea </a>
                            {renderFilterList(10, 12)}
                        </div>
                    </div>
                    <div className='internship-content-col'>
                        <Searchbar setSearch={setSearch}></Searchbar>
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago" 
                            isNew={true}/>
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago" />
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago" />
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago" />
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago" />
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago" />
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago" />
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago" />
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago" />
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago" />
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago" />
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Internship;