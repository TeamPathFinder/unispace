import { useEffect, useRef, useState } from "react";
import Filter from "./subcomponents/Filter";
import SearchBarMobile from "./subcomponents/SearchBarMobile";
import { ReactComponent as FilterIcon } from "../../../assets/filter.svg";
import "./InternshipMobile.css";
import InternshipListingMobile from "./subcomponents/InternshipListingMobile";
const InternshipMobile = ({
  currTime,
  shownInternshipList,
  totalInternshipCount,
  handlePageChange,
  maxPage,
  currPage,
  setCurrPage,
  search,
  setSearch,
  filterOptions,
  setFilterOptions,
  isEnglish,
  currInternshipCount,
}) => {
  const [isFilterOn, setIsFilterOn] = useState(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     if (entries[0].isIntersecting) {
    //       handlePageChange(currPage + 1);
    //       console.log("intersecting");
    //     }
    //   },
    let timeouts = {};
    const observer = new IntersectionObserver(
      (entries, ob) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            timeouts[e.target.id] = setTimeout(() => {
              ob.unobserve(e.target);
              console.log("intersecting");
              handlePageChange(currPage + 1);
            }, 500);
          } else {
            clearTimeout(timeouts[e.target.id]);
          }
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return (
    <>
      <Filter
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        setIsFilterOn={setIsFilterOn}
      />
      <div className="internship-container-mobile flex fd-col">
        <div className="internship-content-container-mobile flex fd-col">
          <div className="internship-header-container-mobile flex fd-col">
            {/* <div className="internship-header-mobile">
              {isEnglish
                ? "Your space for upcoming 2024 internships"
                : "다가오는 2024 하계 인턴십을 위한 space"}
            </div> */}
            <div className="internship-info-mobile flex fd-col">
              <div className="curr-time flex">{currTime}</div>
              <div className="internship-count-mobile-container flex">
                <div className="internship-count-mobile flex">
                  <div className="count" style={{ fontWeight: "bold" }}>
                    {totalInternshipCount + " "}{" "}
                  </div>
                  <div>
                    {isEnglish
                      ? "opportunities are waiting for you!"
                      : "개의 채용공고가 당신을 기다리고 있어요!"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search-area-mobile flex fd-row">
            <button className="filter-button-mobile">
              <FilterIcon className="filter-icon" />
              Filter
            </button>
            <SearchBarMobile
              isEnglish={isEnglish}
              setSearch={setSearch}
              handlePageChange={handlePageChange}
            />
          </div>
          <div className="internship-content-col-mobile">
            <div className="curr-internship-count-mobile">
              {isFilterOn &&
                "*" + currInternshipCount + " " + "results from your interest"}
            </div>
            {shownInternshipList.map((item) => (
              <InternshipListingMobile
                key={item.id}
                job_id={item.id}
                company={item.company}
                position={item.title}
                city={item.city.includes("Other") ? "Other" : item.city}
                country={item.country}
                viewCount={item.view_count}
                isNew={item.date_posted == 0}
                url={item.apply_link}
              />
            ))}
            <div ref={observerTarget} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InternshipMobile;
