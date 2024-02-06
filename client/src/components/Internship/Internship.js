import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Internship.css';
import FilterOption from './subcomponents/FilterOption';
import Searchbar from './subcomponents/Searchbar';
import InternshipListing from './subcomponents/InternshipListing';
import { ReactComponent as NavRightArrow } from '../../assets/navRightArrow.svg';
import { ReactComponent as NavLeftArrow } from '../../assets/navLeftArrow.svg';
import { ReactComponent as CollapsibleArrow } from '../../assets/collapsible_arrow.svg';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';
import InternshipMobile from './InternshipMobile/InternshipMobile';
import InternshipListingMobile from './InternshipMobile/subcomponents/InternshipListingMobile';
import { ReactComponent as FilterIcon } from '../../assets/filter.svg';
import SearchBarMobile from './InternshipMobile/subcomponents/SearchBarMobile';

// Set API URL according to environment
let baseURL;
if (process.env.REACT_APP_NODE_ENV === 'production') {
    baseURL = process.env.REACT_APP_UNISPACE_API_URL;
} else {
    baseURL = process.env.REACT_APP_BASE_API_URL;
}

const Internship = () => {

	const [isFilterOn, setIsFilterOn] = useState(false);
	const observerTarget = useRef(null);
	const [isFilterFocus, setIsFilterFocus] = useState(false);

   
	const Desktop = ({ children }) => {
		const isDesktop = useMediaQuery({ minWidth: 992 });
		return isDesktop ? children : null;
	};
	const isMobile = useMediaQuery({ maxWidth: 991 }); // needed in outer scope to use it in fetching logic
	const Mobile = ({ children }) => {
		return isMobile ? children : null;
	};

    //***************************** MOBILE RELATED VARS **************** */
    const InternshipTagline = () => {
        return (
            <div className="internship-tagline-container">
                <p className="internship-tagline">
                    Your Space for upcoming <strong>2024 Summer Internships</strong>
                </p>
            </div>
        );
    };

    //***************************** FILTER RELATED VARS **************** */
    
    const [filterOptions, setFilterOptions] = useState([
        // Canada
        { id: 'Toronto', label: 'Toronto', isChecked: false, type: 'city' },
        { id: 'Vancouver', label: 'Vancouver', isChecked: false, type: 'city' },
        { id: 'Québec City', label: 'Québec', isChecked: false, type: 'city' },
        { id: 'Ottawa', label: 'Ottawa', isChecked: false, type: 'city' },
        { id: 'Canada Other', label: 'Other', isChecked: false, type: 'city' },
        // USA
        { id: 'New York', label: 'New York City', isChecked: false, type: 'city' },
        { id: 'San Francisco', label: 'San Francisco', isChecked: false, type: 'city' },
        { id: 'Boston', label: 'Boston', isChecked: false, type: 'city' },
        { id: 'USA Other', label: 'Other', isChecked: false, type: 'city' },
        // Korea
        { id: 'Seoul', label: 'Seoul', isChecked: false, type: 'city' },
        { id: 'Korea Other', label: 'Other', isChecked: false, type: 'city' },
        // Remote
        { id: 'Remote', label: 'Remote', isChecked: false, type: 'city' },
        // Add more filter options here

        // Countries // mostly for mobile view use
        { id: 'Canada', label: 'Canada', isChecked: false, type: 'country' },
        { id: 'USA', label: 'USA', isChecked: false, type: 'country'  },
        { id: 'Korea', label: 'Korea', isChecked: false, type: 'country'  },
        { id: 'Remote', label: 'Remote', isChecked: false, type: 'country'  },
    ]);

    const { lang } = useParams();
    const isEnglish = lang == 'en';
    const { setIsEnglish } = useLanguage();

    useEffect(() => {
        setIsEnglish(lang === 'en');
    }, [lang, setIsEnglish]);

    // function to render country options on left hand filter
    // index_start is start index of filter options, index_end is end index
    const renderFilterList = (index_start, index_end) => {
        // function that occurs when clicking on filter checkbox
        const handleFilterChange = (id) => {
            //TODO: axios call here later at some point

            setFilterOptions((prevOptions) =>
                prevOptions.map((option) =>
                    option.id === id
                        ? { ...option, isChecked: !option.isChecked }
                        : option
                )
            );
        };

        return filterOptions
            .slice(index_start, index_end)
            .map((option) => (
                <FilterOption
                    key={option.id}
                    id={option.id}
                    label={option.label}
                    isChecked={option.isChecked}
                    onChange={() => handleFilterChange(option.id)}
                />
            ));
    };

    const [collapsibleHeaders, setCollapsibleHeaders] = useState({
        canada: true,
        usa: true,
        korea: true,
        countries: false,
        cities: false,
    });

    const handleCollapsibleHeader = (event, header) => {
        event.stopPropagation();
        setCollapsibleHeaders((prevState) => {
            return {
                ...prevState,
                [header]: !prevState[header],
            };
        });
    };

    /**************** SEARCH RELATED VARS *******************************/

    const [search, setSearch] = useState('');

    // *********** ************ PAGINATION RELATED VARS **************** *//

    const ref = useRef(null);
    const [currPage, setCurrPage] = useState(1);
    const [leftNavArrow, setLeftNavArrow] = useState(false);
    const [rightNavArrow, setRightNavArrow] = useState(true);
    const [shownInternshipList, setShownInternshipList] = useState([]);
    const [maxPage, setMaxPage] = useState(5);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [totalInternshipCount, setTotalInternshipCount] = useState(-1);
    const [currInternshipCount, setCurrInternshipCount] = useState(-1);
    const generatePagination = () => {
        const PAGESTOSHOW = 5;
        const halfRange = Math.floor(PAGESTOSHOW / 2);
        let start = currPage;
        let end = Math.min(start + PAGESTOSHOW - 1, maxPage);

        // if start and end is less than 5 pages
        if (end - start + 1 < 5) {
            start = Math.max(end - PAGESTOSHOW + 1, 1);
        }

        const pagination = [];
        console.log(end);
        console.log(maxPage);
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
        if (currPage < end) {
            setRightNavArrow(true);
        } else if (currPage == end) {
            setRightNavArrow(false);
        }

        if (currPage > 1) {
            setLeftNavArrow(true);
        } else if (currPage == 1) {
            setLeftNavArrow(false);
        }

        console.log(pagination);

        return pagination;
    };

    const handlePageChange = (pageNum) => {
        if (!(1 <= pageNum && pageNum <= maxPage)) {
            return;
        } else {
            setCurrPage(pageNum);
            ref.current?.scrollIntoView();
        }
    };

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
    };

    const getCurrentDateFormatted = () => {
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
        //format YYYY-MM-DD
        return `${year}-${month}-${date}`;
    };

	useEffect(() => {
		//Axios call here to get max page number and fetch internship list
		const fetchInternshipList = () => {
			const cities = filterOptions
				.filter((option) => option.isChecked && option.type === 'city')
				.map((option) => option.id)
				.join(',');
			const countries = filterOptions
				.filter((option) => option.isChecked && option.type === 'country')
				.map((option) => option.id)
				.join(',');
            if (cities || search || countries) {
                setIsFilterOn(true);
            } else {
                setIsFilterOn(false);
            }
			const requestURL = `${baseURL}/api/internship/jobs-list/?page=${currPage}&search=${search}&cities=${cities}&countries=${countries}`;
			axios
				.get(requestURL)
				.then((response) => {
					if (totalInternshipCount == -1) {
						setTotalInternshipCount(response.data.count);
					}
					setCurrInternshipCount(response.data.count);
					if (isMobile && currPage !== 1) {
						setShownInternshipList((prev) => [
							...prev,
							...response.data.results,
						]); // extend data to implement infinite scrolling
					} else {
						setShownInternshipList(response.data.results);
					}
					console.log(response.data);
					setMaxPage(Math.ceil(response.data.count / 12));
				})
				.catch((error) => {
					console.log(error);
				});
		};

        fetchInternshipList();
        setPageNumbers(generatePagination());
    }, [currPage, filterOptions, search, maxPage]);

    useEffect(() => {
        setCurrPage(1);
    }, [filterOptions]);

    // useEffect to update state of isFilterOn
    useEffect(() => {
        // Check if any filter option is checked
        const isAnyFilterChecked = filterOptions.some(option => option.isChecked);

        setIsFilterOn(isAnyFilterChecked);
      }, [filterOptions]); 

      let timeouts = {};

      useEffect(() => {
        const observerCallback = (entries, observer) => {
          for (const entry of entries) {
            const targetId = entry.target.id;
    
            if (entry.isIntersecting) {
              timeouts[targetId] = setTimeout(() => {
                observer.unobserve(entry.target);
                console.log('Intersecting');
                handlePageChange(currPage + 1);
              }, 500);
            } else {
              clearTimeout(timeouts[targetId]);
            }
          }
        };
    
        const observerOptions = { threshold: 1 };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
    
        if (observerTarget.current) {
          observer.observe(observerTarget.current);
        }
    
        return () => {
          if (observerTarget.current) {
            observer.unobserve(observerTarget.current);
          }
    
          // Clear all timeouts in cleanup
          Object.values(timeouts).forEach(clearTimeout);
        };
      }, [observerTarget, handlePageChange, currPage]);
  
	//***********************************JSX below ********************************* */
	return (
		<>
			<Desktop>
				<div className="internship-container flex fd-col">
					<div className="flex fd-col internship-content-container">
						<div className="flex fd-col internship-header-container">
							<h2> {isEnglish ? 'Internship' : '인턴십'} </h2>
							<a>
								{' '}
								{isEnglish
									? 'Your space for upcoming 2024 internships'
									: '다가오는 2024 하계 인턴십을 위한 space'}{' '}
							</a>
							<div className="internship-count">
								<a>
									{' '}
									{getCurrentTimeFormatted()} |{' '}
									<span style={{ fontWeight: 'bold' }}>
										{' '}
										{totalInternshipCount}{' '}
									</span>{' '}
									{isEnglish
										? 'opportunies are waiting for you'
										: '개의 채용공고가 당신을 기다리고 있어요!'}{' '}
								</a>
							</div>
						</div>
						<div className="internship-grid">
							<div className="internship-filter-col flex fd-col">
								<div className="flex fd-col internship-filter-container">
									<div
										className="flex fd-row align-center internship-collapsible-header"
										onClick={(e) => handleCollapsibleHeader(e, 'canada')}
									>
										<CollapsibleArrow
											className={`filter-collapsible-arrow ${
												collapsibleHeaders['canada'] ? 'flip-vertical' : ''
											}`}
										/>
										<a> Canada </a>
									</div>
									<div
										className={`filter-collapsible-div ${
											collapsibleHeaders['canada'] ? 'open' : ''
										}`}
									>
										{renderFilterList(0, 5)}
									</div>

                                    <div
                                        className="flex fd-row align-center internship-collapsible-header"
                                        onClick={(e) => handleCollapsibleHeader(e, 'usa')}
                                    >
                                        <CollapsibleArrow
                                            className={`filter-collapsible-arrow ${collapsibleHeaders['usa'] ? 'flip-vertical' : ''
                                                }`}
                                        />
                                        <a> USA </a>
                                    </div>
                                    <div
                                        className={`filter-collapsible-div ${collapsibleHeaders['usa'] ? 'open' : ''
                                            }`}
                                    >
                                        {renderFilterList(5, 9)}
                                    </div>

                                    <div
                                        className="flex fd-row align-center internship-collapsible-header"
                                        onClick={(e) => handleCollapsibleHeader(e, 'korea')}
                                    >
                                        <CollapsibleArrow
                                            className={`filter-collapsible-arrow ${collapsibleHeaders['korea'] ? 'flip-vertical' : ''
                                                }`}
                                        />
                                        <a> Korea </a>
                                    </div>
                                    <div
                                        className={`filter-collapsible-div ${collapsibleHeaders['korea'] ? 'open' : ''
                                            }`}
                                    >
                                        {renderFilterList(9, 11)}
                                    </div>

                                    <div
                                        className="flex fd-row align-center internship-collapsible-header"
                                        onClick={(e) => handleCollapsibleHeader(e, 'remote')}
                                    >
                                        <CollapsibleArrow
                                            className={`filter-collapsible-arrow ${collapsibleHeaders['remote'] ? 'flip-vertical' : ''
                                                }`}
                                        />
                                        <a> Remote </a>
                                    </div>
                                    <div
                                        className={`filter-collapsible-div ${collapsibleHeaders['remote'] ? 'open' : ''
                                            }`}
                                    >
                                        {renderFilterList(11, 12)}
                                    </div>
                                </div>
                            </div>
                            <div ref={ref} className="internship-content-col">
                                <Searchbar
                                    setSearch={setSearch}
                                    isEnglish={isEnglish}
                                    handlePageChange={handlePageChange}
                                ></Searchbar>
                                {shownInternshipList.map((item) => (
                                    <InternshipListing
                                        key={item.id}
                                        job_id={item.id}
                                        company={item.company}
                                        position={item.title}
                                        city={item.city.includes('Other') ? 'Other' : item.city}
                                        country={item.country}
                                        viewCount={item.view_count}
                                        isNew={item.posted_date == getCurrentDateFormatted()}
                                        url={item.apply_link}
                                    />
                                ))}
                                <div className="pagination flex fd-row align-center">
                                    <NavLeftArrow
                                        className={`nav-arrow ${leftNavArrow ? '' : 'inactive'}`}
                                        onClick={() => {
                                            handlePageChange(currPage - 1);
                                        }}
                                    />
                                    {pageNumbers.map((page, i) => {
                                        return (
                                            <span
                                                onClick={() => handlePageChange(page)}
                                                key={i}
                                                className={`${page == currPage ? 'active' : ''}`}
                                            >
                                                {' '}
                                                {page}{' '}
                                            </span>
                                        );
                                    })}
                                    <NavRightArrow
                                        onClick={() => {
                                            handlePageChange(currPage + 1);
                                        }}
                                        className={`nav-arrow ${rightNavArrow ? '' : 'inactive'}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                {/* <InternshipMobile
                    currTime={getCurrentTimeFormatted()}
                    renderFilterList={renderFilterList}
                    shownInternshipList={shownInternshipList}
                    totalInternshipCount={totalInternshipCount}
                    handlePageChange={handlePageChange}
                    handleCollapsibleHeader={handleCollapsibleHeader}
                    collapsibleHeaders={collapsibleHeaders}
                    maxPage={maxPage}
                    currPage={currPage}
                    setCurrPage={setCurrPage}
                    search={search}
                    setSearch={setSearch}
                    filterOptions={filterOptions}
                    setFilterOptions={setFilterOptions}
                    isEnglish={true} // mobile view currently shows English only
                    currInternshipCount={currInternshipCount}
                //   setCurrPage={setCurrPage}
                /> */}

                <>
                    {isFilterFocus ? (
                        <>
                            <div className="mobile-filter-container">
                                <div className="mobile-filter-section fd-row">
                                    <FilterIcon
                                        className="filter-icon"
                                        style={{ height: '18px' }}
                                    />
                                    <p
                                        className="mobile-filter-header"
                                        style={{ marginLeft: '8px' }}
                                    >
                                        Filter
                                    </p>
                                </div>

                                <div
                                    className="mobile-filter-section fd-row align-center"
                                    onClick={(e) => handleCollapsibleHeader(e, 'countries')}
                                    style={{ justifyContent: 'space-between' }}
                                >
                                    <p className="mobile-filter-header"> Select Country </p>
                                    <CollapsibleArrow
                                        className={`filter-collapsible-arrow-mobile ${collapsibleHeaders['countries'] ? 'flip-vertical' : ''
                                            }`}
                                    />
                                </div>

                                <div
                                    className={`mobile-filter-section fd-col ${collapsibleHeaders['countries'] ? '' : 'closed'
                                        }`}
                                >
                                    {renderFilterList(12, 16)}
                                </div>

                                <div
                                    className="mobile-filter-section fd-row align-center"
                                    onClick={(e) => handleCollapsibleHeader(e, 'cities')}
                                    style={{ justifyContent: 'space-between' }}
                                >
                                    <p className="mobile-filter-header"> Select Location </p>
                                    <CollapsibleArrow
                                        className={`filter-collapsible-arrow-mobile ${collapsibleHeaders['cities'] ? 'flip-vertical' : ''
                                            }`}
                                    />
                                </div>

                                <div
                                    className={`mobile-filter-section fd-col ${collapsibleHeaders['cities'] ? '' : 'closed'
                                        }`}
                                >
                                    {renderFilterList(0, 11)}
                                </div>
                            </div>

                            <div
                                className={`mobile-filter-apply-button`}
                                onClick={() => {
                                    console.log("this shouldn't be happening");
                                    setIsFilterFocus(false);
                                }}
                            >
                                Apply
                            </div>
                        </>
                    ) : (
                        <></>
                    )}

                    {isFilterFocus ? (
                        <></>
                    ) : (
                        <>
                            <InternshipTagline />
                            <div className="internship-container-mobile flex fd-col">
                                <div className="internship-info-mobile flex fd-col">
                                    <div className="internship-info time">
                                        <span className="curr-time">
                                            {getCurrentTimeFormatted().toLocaleString()} EST
                                        </span>
                                    </div>
                                    <div className="internship-info">
                                        <span className="count">
                                            {totalInternshipCount.toLocaleString()} opportunities are
                                            waiting for you!
                                        </span>
                                    </div>
                                </div>

                                <div className="internship-search-area-mobile flex fd-row">
                                    <button
                                        className={`filter-button-mobile ${isFilterOn ? 'on' : 'off'}`}
                                        onClick={() => {
                                            setIsFilterFocus(true);
                                        }}
                                    >
                                        <FilterIcon className="filter-icon" />
                                        Filter
                                    </button>
                                    <SearchBarMobile
                                        isEnglish={isEnglish}
                                        setSearch={setSearch}
                                        handlePageChange={handlePageChange}
                                    />
                                </div>

                                <div className="internship-content-container-mobile flex fd-col">
                                    <div className="internship-content-col-mobile">
                            

                                        <div className="curr-internship-count-mobile" >
                                            {isFilterOn &&
                                                '*' +
                                                currInternshipCount +
                                                ' ' +
                                                'results from your interests.'}
                                        </div>

                                        <div style={shownInternshipList.length ? { border: 'solid 1px black', marginTop: '1.5em' }
                                            : { display: 'none' }}>
                                            {/* <InternshipListingMobile
                                                job_id={1}
                                                company={'Apple Apple Apple Apple Apple Apple'}
                                                position={'Software Engineer aksdjfh askdjfh asdkfj hasdf'}
                                                city={'Toronto'}
                                                country={'Canada'}
                                                viewCount={53}
                                                isNew={false}
                                                url={'none'}
                                            />
                                            <InternshipListingMobile
                                                job_id={1}
                                                company={'Apple'}
                                                position={'Software Engineer'}
                                                city={'Toronto'}
                                                country={'Canada'}
                                                viewCount={53}
                                                isNew={false}
                                                url={'none'}
                                            /> */}

                                            {shownInternshipList.map((item) => (
                                                <InternshipListingMobile
                                                    key={item.id}
                                                    job_id={item.id}
                                                    company={item.company}
                                                    position={item.title}
                                                    city={item.city.includes('Other') ? 'Other' : item.city}
                                                    country={item.country}
                                                    viewCount={item.view_count}
                                                    isNew={false}
                                                    url={item.apply_link}
                                                />
                                            ))}

                                        </div>
                                        <div ref={observerTarget} />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            </Mobile>
        </>
    );
};

export default Internship;
