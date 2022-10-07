import classes from "./search-box.styles.module.css";

const SearchBox = ({className, placeholder, onChangeHandler}) => (
  <input
    className={`${classes.search_box} ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);


export default SearchBox;
