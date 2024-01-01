import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import './Internship.css'
import FilterOption from './subcomponents/FilterOption';
import Searchbar from './subcomponents/Searchbar';
import InternshipListing from './subcomponents/InternshipListing';
import { ReactComponent as NavRightArrow } from '../../assets/navRightArrow.svg'
import { ReactComponent as NavLeftArrow } from '../../assets/navLeftArrow.svg'
import { ReactComponent as CollapsibleArrow } from '../../assets/collapsible_arrow.svg'
import { useParams } from 'react-router-dom';
import { useLanguage } from "../../LanguageContext";

const baseURL = 'http://127.0.0.1:8000';

const Internship = () => {

    //***************************** FILTER RELATED VARS **************** */
    const [filterOptions, setFilterOptions] = useState([
        // Canada
        { id: 'Toronto', label: 'Toronto', isChecked: false },
        { id: 'Vancouver', label: 'Vancouver', isChecked: false },
        { id: 'Quebec', label: 'Quebec', isChecked: false },
        { id: 'Ottawa', label: 'Ottawa', isChecked: false },
        { id: 'Canada Other', label: 'Other', isChecked: false },
        // USA
        { id: 'New York', label: 'New York City', isChecked: false },
        { id: 'San Francisco', label: 'San Francisco', isChecked: false },
        { id: 'Boston', label: 'Boston', isChecked: false },
        { id: 'USA Other', label: 'Other', isChecked: false },
        // Korea
        { id: 'Seoul', label: 'Seoul', isChecked: false },
        { id: 'Korea Other', label: 'Other', isChecked: false },
        // Remote
        { id: 'Remote', label: 'Remote', isChecked: false }
        // Add more filter options here
    ]);

    const {lang} = useParams();
    const isEnglish = lang == 'en'
    const { setIsEnglish } = useLanguage();

    useEffect(() => {
        setIsEnglish(lang === "en");
      }, [lang, setIsEnglish]);

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
    const [maxPage, setMaxPage] = useState(5);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [totalInternshipCount, setTotalInternshipCount] = useState(-1);

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
        console.log(end)
        console.log(maxPage)
        for (let i = start; i <= end; i++) {
            pagination.push(i);
        }
        // if (start > 1 && end < maxPage ){
        //     setLeftNavArrow(true);
        //     setRightNavArrow(true);
        // } else if (start == 1) {
        //     setLeftNavArrow(false)
        // } 
        // if (end == maxPage){
        //     setRightNavArrow(false)
        //     console.log("HA")
        // }
        if (currPage < end){
            setRightNavArrow(true)
        } else if (currPage == end){
            setRightNavArrow(false)
        }

        if (currPage > 1){
            setLeftNavArrow(true)
        } else if (currPage == 1){
            setLeftNavArrow(false)
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

    const getCurrentTimeFormatted = () => {
        const now = new Date();
        const year = now.getFullYear();
        let month = now.getMonth() + 1;
        if (month < 10) {
            month = `0${month}`;
        }
        let date = now.getDate();
        if (date < 10) {
            date = `0${date}`;
        }
        let hour = now.getHours();
        if (hour < 10) {
            hour = `0${hour}`;
        }
        const minute = now.getMinutes();

        // format: YYYY.MM.DD.HH:MM
        return `${year}.${month}.${date}.${hour}:${minute}`;
    }

    useEffect(() => {
        //Axios call here to get max page number and fetch internship list
        const fetchInternshipList = () => {
            const cities = filterOptions.filter((option) => option.isChecked).map((option) => option.id).join(',');
            const requestURL = `${baseURL}/api/internship/jobs-list/?page=${currPage}&search=${search}&cities=${cities}`;
            axios.get(requestURL)
            .then((response) => {
                if (totalInternshipCount == -1){
                    setTotalInternshipCount(response.data.count);
                }
                setShownInternshipList(response.data.results);
                console.log(response.data)
                setMaxPage(Math.ceil(response.data.count / 12));
            }).catch((error) => {
                console.log(error);
            });
        }

        fetchInternshipList();
        setPageNumbers(generatePagination());

    }, [currPage, filterOptions, search, maxPage])

    useEffect(()=> {
        setCurrPage(1);
    }, [filterOptions])

    //***********************************JSX below ********************************* */
    return (
        <div className="internship-container flex fd-col">
            <div className="flex fd-col internship-content-container">
                <div className="flex fd-col internship-header-container">
                    <h2> {isEnglish ? 'Internship': '인턴십'}  </h2>
                    <a> {isEnglish ? 'Your space for upcoming 2024 internships': '다가오는 2024 하계 인턴십을 위한 space'} </a>
                    <div className='internship-count'> 
                        <a> {getCurrentTimeFormatted()} | <span style={{fontWeight:'bold'}}> {totalInternshipCount} </span> {isEnglish ? 'opportunies are waiting for you': '개의 채용공고가 당신을 기다리고 있어요!'} </a>
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
                                {renderFilterList(0, 5)}
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
                                {renderFilterList(5, 9)}
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
                                {renderFilterList(9, 11)}
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
                                {renderFilterList(11, 12)}
                            </div>
                        </div>
                    </div>
                    <div ref={ref} className='internship-content-col'>
                        <Searchbar setSearch={setSearch} isEnglish={isEnglish}></Searchbar>
                        {shownInternshipList.map((item) => (
                            <InternshipListing
                                key={item.id}
                                job_id={item.id}
                                company={item.company}
                                position={item.title}
                                city={item.city.includes('Other') ? 'Other' : item.city}
                                country={item.country}
                                viewCount={item.view_count}
                                isNew={item.date_posted == 0}
                                url = {item.apply_link}
                            />                            
                        ))}
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