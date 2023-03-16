import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { fetchData } from "../../redux/slices/CardListSlice";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { Container, PaginationLarge, PaginationSmall } from "./styles";
import Card from "../Card";

const CardsList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.card.data);
  const searchValue = useAppSelector((state) => state.card.searchVal);
  const fetchUrl = useAppSelector((state) => state.card.url);
  const status = useAppSelector((state) => state.card.status);
  const gender = useAppSelector((state) => state.card.gender);
  const charactersCount = characters.info?.count; //overall number of returned characters

  const handlePageClick = (e: any) => {
    e.selected >= page ? setPage(e.selected + 1) : setPage(e.selected + 1); //setting currnet page basing on selected page in pagintaion
    window.scrollTo(0, 400); //returning viewport back to the top, so you don't have to
  };

  useEffect(() => {
    dispatch(fetchData({ name: searchValue, page, status, gender }));
  }, [fetchUrl, searchValue, page, status, gender]);

  return (
    <>
      <Container>
        {characters.results?.map((character: any) => (
          <Card
            key={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            location={character.location.name}
          />
        ))}
      </Container>
      <PaginationLarge>
        <ReactPaginate
          pageRangeDisplayed={3}
          pageCount={Math.ceil(charactersCount / 20)}
          onPageChange={handlePageClick}
          previousLabel="Previous"
          breakLabel="..."
          nextLabel="Next"
          className="container"
          pageClassName="page"
          pageLinkClassName="link"
          activeClassName="activePage"
          previousClassName="navigationBtn"
          previousLinkClassName="navigationBtnLink"
          nextClassName="navigationBtn"
          nextLinkClassName="navigationBtnLink"
        />
      </PaginationLarge>
      <PaginationSmall>
        <ReactPaginate
          pageRangeDisplayed={2}
          pageCount={Math.ceil(charactersCount / 20)}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          previousLabel="Previous"
          breakLabel="."
          nextLabel="Next"
          className="container"
          pageClassName="page"
          pageLinkClassName="link"
          activeClassName="activePage"
          previousClassName="navigationBtn"
          previousLinkClassName="navigationBtnLink"
          nextClassName="navigationBtn"
          nextLinkClassName="navigationBtnLink"
        />
      </PaginationSmall>
    </>
  );
};

export default CardsList;
