import { useState } from "react";
import { toursList } from "../../data";
import HeroHeader from "../../components/hero-header/hero-header";
import NewsLetter from "../../components/newsletter/news-letter";
import Pagination from "../../components/pagination/pagination";
import Services from "../../components/services/Services";
import SortInput from "../../components/sort-input/sort-input";
import TourList from "../../components/tours/tourlist";
import Banner from "../../components/banner/banner";
import {paginate} from "../../utils/pagination";

const Home = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [sortItem, setSortItem] = useState("recomended");

  // Sort Tour
  const sortedTourList = 
    sortItem === "low" 
    ? toursList.sort((a,b) => a.priceFrom - b.priceFrom)
    : sortItem === "high" ? toursList.sort((a,b) => b.priceFrom - a.priceFrom)
    : toursList.sort((a,b) => b.rating - a.rating);

    const { pages, orderedTourList } 
    = paginate(toursList.length,sortedTourList,currentPage);
  return (
    <div>
      <HeroHeader />
      <Services />
      <SortInput
        setSortItem={setSortItem}
        sortItem={sortItem}
        toursLength={toursList.length}
      />
      <TourList toursList={orderedTourList} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
      <NewsLetter />
    </div>
  );
};

export default Home;