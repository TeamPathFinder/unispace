import { ReactComponent as SearchIcon } from '../../../assets/search.svg'
import { useRef } from 'react';

const Searchbar = ({ setSearch, isEnglish, handlePageChange, search }) => {

    const inputRef = useRef();

    const handleEnter = (event) => {
        handlePageChange(1);
        setSearch(event.target.value);
    }

    const handleSearch = () => {
        handlePageChange(1);
        setSearch(inputRef.current.value);
      };

    const placeholder = isEnglish? 'Search' : '찾고 있는 회사, 포지션을 자유롭게 검색해보세요.'

    return (
        <div className="flex fd-row searchbar">
            <input
                ref={inputRef}
                defaultValue={search}
                type="text"
                placeholder= {placeholder}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleEnter(e)
                    }}
                }
                style={{
                    borderWidth: '0px',
                    backgroundColor: 'transparent'
                }}
            />
            <SearchIcon className='search-icon' onClick={handleSearch}/>
        </div>
    );
}

export default Searchbar