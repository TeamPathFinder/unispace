import { ReactComponent as SearchIcon } from '../../../assets/search.svg'

const Searchbar = ({ setSearch }) => {
    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className="flex fd-row searchbar">
            <input
                type="text"
                placeholder="찾고 있는 회사, 포지션을 자유롭게 검색해보세요."
                onChange={handleChange}
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