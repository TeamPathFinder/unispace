import { ReactComponent as SearchIcon } from '../../../assets/search.svg'

const Searchbar = ({ setSearch, isEnglish, handlePageChange, search }) => {
    const handleChange = (event) => {
        handlePageChange(1);
        setSearch(event.target.value);
    }

    const placeholder = isEnglish? 'Search' : '찾고 있는 회사, 포지션을 자유롭게 검색해보세요.'

    return (
        <div className="flex fd-row searchbar">
            <input
                defaultValue={search}
                type="text"
                placeholder= {placeholder}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleChange(e)
                    }}
                }
                style={{
                    borderWidth: '0px',
                    backgroundColor: 'transparent'
                }}
            />
            <SearchIcon className='search-icon'/>
        </div>
    );
}

export default Searchbar