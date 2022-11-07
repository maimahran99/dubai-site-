import "./tourlist.css";
import TourItem from "./touritem";

const TourList = ({ toursList }) => {
  return (
    <div className="tour-list">
      {toursList.map((item) => (
         <TourItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TourList;