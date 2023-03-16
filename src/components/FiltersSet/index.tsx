import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { setStatus, setGender } from "../../redux/slices/CardListSlice";
import { Container, FilterHeader, FilterItem, FilterList } from "./styles";

const statuses = ["Alive", "Dead", "Unknown"] as const;
const genders = ["Female", "Male", "Genderless", "Unknown"] as const;

const FiltersSet = () => {
  const status = useAppSelector((state) => state.card.status);
  const gender = useAppSelector((state) => state.card.gender);

  return (
    <>
      <Filter
        title="status"
        optionsList={statuses}
        selector={status}
        action={setStatus}
      />
      <Filter
        title="gender"
        optionsList={genders}
        selector={gender}
        action={setGender}
      />
    </>
  );
};

interface FilterProps {
  title: string;
  optionsList: any;
  selector: any;
  action: any;
}

const Filter = ({ title, optionsList, selector, action }: FilterProps) => {
  const dispatch = useAppDispatch();

  const onClickHandler = (e: any) => {
    //setting active filter option/item
    if (e.target.innerText === selector) {
      dispatch(action(""));
    } else {
      dispatch(action(e.target.innerText));
    }
  };

  /* useEffect(() => {
    console.log("Current: ", selector);
  }, [selector]); */

  //generating a list of filter options/items
  const list = optionsList.map((option: string) => {
    return option === selector ? (
      <FilterItem key={nanoid()} onClick={onClickHandler} isActive={true}>
        {option}
      </FilterItem>
    ) : (
      <FilterItem key={nanoid()} onClick={onClickHandler}>
        {option}
      </FilterItem>
    );
  });

  return (
    <>
      <Container>
        <FilterHeader>{title}</FilterHeader>
        <FilterList>{list}</FilterList>
      </Container>
    </>
  );
};

export default FiltersSet;
