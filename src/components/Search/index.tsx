import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { handleSearchChange } from "../../redux/slices/CardListSlice";
import { Container, SearchBar, SearchField } from "./styles";

const Search = () => {
  const searchVal = useAppSelector((state) => state.card.searchVal);
  const dispatch = useAppDispatch();
  const changeHandler = (e: any) => {
    dispatch(handleSearchChange(e.target.value));
  };

  return (
    <Container>
      <SearchBar>
        <SearchField
          type="text"
          placeholder="Filter charcters by name:"
          value={searchVal}
          onChange={changeHandler}
        />
      </SearchBar>
    </Container>
  );
};

export default Search;
