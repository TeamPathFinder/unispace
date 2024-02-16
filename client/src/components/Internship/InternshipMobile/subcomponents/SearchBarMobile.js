import { ReactComponent as SearchIcon } from "../../../../assets/search.svg";
import "../InternshipMobile.css";
import { useRef } from 'react';

const SearchBarMobile = ({ setSearch, isEnglish, handlePageChange, search }) => {

  const inputRef = useRef();

  const handleEnter = (event) => {
    handlePageChange(1);
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    handlePageChange(1);
    setSearch(inputRef.current.value);
  };

  // const placeholder = isEnglish
  //   ? "Company / Position"
  //   : "찾고 있는 회사, 포지션을 자유롭게 검색해보세요.";
  const placeholder = "Company / Position"; // English only for now

  return (
    <div className="flex fd-row searchbar-mobile">
      <input
        ref={inputRef}
        defaultValue={search}
        className="input-mobile"
        type="text"
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleEnter(e);
          }
        }}
        style={{
          borderWidth: "0px",
          backgroundColor: "transparent",
          color:'#3D3FEB'
        }}
      />
      <SearchIcon className="search-icon-mobile" onClick={handleSearch}/>
    </div>
  );
};
export default SearchBarMobile;
