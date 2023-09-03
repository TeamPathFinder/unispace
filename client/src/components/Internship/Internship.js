import { useEffect, useState, useRef } from 'react';
import './Internship.css'
import FilterOption from './subcomponents/FilterOption';
import Searchbar from './subcomponents/Searchbar';
import InternshipListing from './subcomponents/InternshipListing';
import { ReactComponent as NavRightArrow } from '../../assets/navRightArrow.svg'
import { ReactComponent as NavLeftArrow } from '../../assets/navLeftArrow.svg'
import { ReactComponent as CollapsibleArrow } from '../../assets/collapsible_arrow.svg'

const Internship = () => {

    //***************************** FILTER RELATED VARS **************** */
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
        { id: 'koreaOther', label: 'Other', isChecked: false },
        { id: 'remote', label: 'Remote', isChecked: false }
        // Add more filter options here
    ]);

    // function to render country options on left hand filter
    // index_start is start index of filter options, index_end is end index
    const renderFilterList = (index_start, index_end) => {

        // function that occurs when clicking on filter checkbox
        const handleFilterChange = (id) => {
            //TODO: axios call here later at some point

            setFilterOptions((prevOptions) =>
                prevOptions.map((option) =>
                    option.id === id ? { ...option, isChecked: !option.isChecked } : option
                )
            );
        };

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

    const [collapsibleHeaders, setCollapsibleHeaders] = useState([
        {
            'canada': true,
            'usa': true,
            'korea': true
        }
    ])

    const handleCollapsibleHeader = (header) => {
        setCollapsibleHeaders((prevState) => {
            return (
                {
                    ...prevState,
                    [header]: !prevState[header]
                })

        }
        )
    }

    /**************** SEARCH RELATED VARS *******************************/

    const [search, setSearch] = useState("");

    // *********** ************ PAGINATION RELATED VARS **************** *//

    const ref = useRef(null);
    const [currPage, setCurrPage] = useState(1);
    const [leftNavArrow, setLeftNavArrow] = useState(false)
    const [rightNavArrow, setRightNavArrow] = useState(true)
    const [shownInternshipList, setShownInternshipList] = useState([]);
    const [maxPage, setMaxPage] = useState(22);
    const [pageNumbers, setPageNumbers] = useState([]);

    const generatePagination = () => {
        const PAGESTOSHOW = 5
        const halfRange = Math.floor(PAGESTOSHOW / 2);
        let start = currPage
        let end = Math.min(start + PAGESTOSHOW - 1, maxPage);

        // if start and end is less than 5 pages
        if (end - start + 1 < 5) {
            start = Math.max(end - PAGESTOSHOW + 1, 1);
        }

        const pagination = [];

        for (let i = start; i <= end; i++) {
            pagination.push(i);
        }
        if (start > 1 && end < maxPage ){
            setLeftNavArrow(true);
            setRightNavArrow(true);
        } else if (start == 1) {
            setLeftNavArrow(false)
        } else if (end == maxPage){
            setRightNavArrow(false)
        }
        console.log(pagination)
        return pagination;
    };

    const handlePageChange = (pageNum) => {
        if (!(1 <= pageNum && pageNum <= maxPage)) {
            return;
        } else {
            setCurrPage(pageNum);
            ref.current?.scrollIntoView();
        }

    }

    useEffect(() => {
        //Axios call here to get max page number and fetch internship list

        setPageNumbers(generatePagination());


    }, [currPage])

    //***********************************JSX below ********************************* */
    return (
        <div className="internship-container flex fd-col">
            <div className="flex fd-col internship-content-container">
                <div className="flex fd-col internship-header-container">
                    <h2> 인턴십 </h2>
                    <a> 다가오는 2024 하계 인턴십을 위한 space </a>
                    <div className='internship-count'> 
                        <a> 2023.08.20.23:19 | <span style={{fontWeight:'bold'}}> 18,420 </span> 개의 채용공구가 당신을 기다리고 있어요! </a>
                    </div>
                </div>
                <div className='internship-grid'>
                    <div className='internship-filter-col flex fd-col'>
                        <div className='flex fd-col internship-filter-container'>
                            <div
                                className='flex fd-row align-center internship-collapsible-header'
                                onClick={() => handleCollapsibleHeader('canada')}
                            >
                                <CollapsibleArrow
                                    className={`filter-collapsible-arrow ${collapsibleHeaders['canada'] ? 'flip-vertical' : ''}`} />
                                <a> Canada </a>
                            </div>
                            <div className={`filter-collapsible-div ${collapsibleHeaders['canada'] ? 'open' : ''}`}>
                                {renderFilterList(0, 4)}
                            </div>


                            <div
                                className='flex fd-row align-center internship-collapsible-header'
                                onClick={() => handleCollapsibleHeader('usa')}
                            >
                                <CollapsibleArrow
                                    className={`filter-collapsible-arrow ${collapsibleHeaders['usa'] ? 'flip-vertical' : ''}`} />
                                <a> USA </a>
                            </div>
                            <div className={`filter-collapsible-div ${collapsibleHeaders['usa'] ? 'open' : ''}`}>
                                {renderFilterList(5, 10)}
                            </div>

                            <div
                                className='flex fd-row align-center internship-collapsible-header'
                                onClick={() => handleCollapsibleHeader('korea')}
                            >
                                <CollapsibleArrow
                                    className={`filter-collapsible-arrow ${collapsibleHeaders['korea'] ? 'flip-vertical' : ''}`} />
                                <a> Korea </a>
                            </div>
                            <div className={`filter-collapsible-div ${collapsibleHeaders['korea'] ? 'open' : ''}`}>
                                {renderFilterList(10, 12)}
                            </div>

                            <div
                                className='flex fd-row align-center internship-collapsible-header'
                                onClick={() => handleCollapsibleHeader('remote')}
                            >
                                <CollapsibleArrow
                                    className={`filter-collapsible-arrow ${collapsibleHeaders['remote'] ? 'flip-vertical' : ''}`} />
                                <a> Remote </a>
                            </div>
                            <div className={`filter-collapsible-div ${collapsibleHeaders['remote'] ? 'open' : ''}`}>
                                {renderFilterList(12, 13)}
                            </div>
                        </div>
                    </div>
                    <div ref={ref} className='internship-content-col'>
                        <Searchbar setSearch={setSearch}></Searchbar>
                        <InternshipListing
                            company="Apple"
                            position="Janitor Intern"
                            location="Trono, Canada"
                            isPaid={false}
                            postTime="Posted 1d ago"
                            isNew={true} />
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
                        <div className='pagination flex fd-row align-center'>
                            <NavLeftArrow
                                className={`nav-arrow ${leftNavArrow ? '': 'inactive'}`}
                                onClick={() => { handlePageChange(currPage - 1) }} 
                            />
                            {pageNumbers.map((page, i) => {
                                return (
                                    <span
                                        onClick={() => handlePageChange(page)}
                                        key={i}
                                        className={`${page == currPage ? 'active' : ''}`}> {page} </span>
                                );
                            })}
                            <NavRightArrow
                                onClick={() => { handlePageChange(currPage + 1) }}
                                className={`nav-arrow ${rightNavArrow ? '': 'inactive'}`}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Internship;