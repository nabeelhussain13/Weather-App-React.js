import { IoSearch } from "react-icons/io5";

const SearchBar = ({ cityName, onChangeHandler, onClickHandler }) => {
  return (
    <div className="search-div">
      <input
        type="text"
        className="app-input"
        placeholder="Search city"
        value={cityName}
        onChange={onChangeHandler}
      />
      <button
        className="app-btn btn btn-primary"
        type="button"
        onClick={onClickHandler}
      >
        <IoSearch />
      </button>
    </div>
  );
};

export default SearchBar;
