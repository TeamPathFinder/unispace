import React from "react";
import '../InternshipMobile.css';
import { ReactComponent as FilterIcon } from "../../../../assets/filter.svg";

import { ReactComponent as CollapsibleArrow } from "../../../../assets/collapsible_arrow.svg";

import FilterOption from "../../subcomponents/FilterOption";
const Filter = ({ filterOptions, renderFilterList, handleCollapsibleHeader, collapsibleHeaders, setIsFilterFocus, isFilterFocus }) => {

    return (
        <>
            <div className="mobile-filter-container">
                <div className="mobile-filter-section fd-row">
                    <FilterIcon className="filter-icon" style={{ height: '18px' }} />
                    <p className="mobile-filter-header" style={{ marginLeft: '8px' }}>Filter</p>
                </div>

                <div className="mobile-filter-section fd-row align-center"
                    onClick={(e) => handleCollapsibleHeader(e, "countries")}
                    style={{ justifyContent: 'space-between' }}
                >
                    <p className="mobile-filter-header"> Select Country </p>
                    <CollapsibleArrow
                        className={`filter-collapsible-arrow-mobile ${collapsibleHeaders["countries"] ? "flip-vertical" : ""
                            }`}
                    />
                </div>

                <div className={`mobile-filter-section fd-col ${collapsibleHeaders["countries"] ? "" : "closed"
                    }`} >
                    {renderFilterList(12, 16)}
                </div>

                <div className="mobile-filter-section fd-row align-center"
                    onClick={(e) => handleCollapsibleHeader(e, "cities")}
                    style={{ justifyContent: 'space-between' }}
                >
                    <p className="mobile-filter-header"> Select Location </p>
                    <CollapsibleArrow
                        className={`filter-collapsible-arrow-mobile ${collapsibleHeaders["cities"] ? "flip-vertical" : ""
                            }`}
                    />
                </div>

                <div className={`mobile-filter-section fd-col ${collapsibleHeaders["cities"] ? "" : "closed"
                    }`} >
                    {renderFilterList(0, 11)}
                </div>
            </div>

            <button className="mobile-filter-apply-button" onClick={()=>{
                console.log("this shouldn't be happening")
                // setIsFilterFocus(false)
                }}>
                Apply
            </button>
        </>
    )
}

export default Filter;
