import GlobalStyle from "../../styles/GlobalStyle";
import CardsList from "../CardsList";
import FiltersSet from "../FiltersSet";
import Header from "../Header";
import Navbar from "../Navbar";
import Search from "../Search";

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Search />
      <FiltersSet />
      <CardsList />
    </>
  );
};

export default Root;
