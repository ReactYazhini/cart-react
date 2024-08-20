import Productcard, { HierarchyComponent } from "./Productcard";
import React, { useContext } from "react";
import Shimmerui from "./shimmer";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

// let productJSON = productjson;

const Productlistcontainer = () => {

  const {loggedInUser,setUserName} = useContext(UserContext)
  // State variable
  const [productJSON, setproductJSON] = React.useState([]); ///productjson

  const [filteredProductJSON, setFilteredProductJSON] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState("");

  const HierarchyComponentCard = HierarchyComponent(Productcard);

  React.useEffect(() => {
    fetchData();
    console.log("test");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01420&lng=76.99410&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //  console.log(json);
    //  console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    setproductJSON(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredProductJSON(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus2 = useOnlineStatus();

  if (onlineStatus2 === false) {
    return <h1>Please check Your Online</h1>;
  }
  return productJSON.length === 0 ? (
    <Shimmerui />
  ) : (
    <div>
      <div>
        <Banner />
      </div>
      <div className="dark:bg-gray-700 bg-blue-100">
        <div className="grid container pt-2">
          <div className="group flex items-center relative">
            <input
              type="text"
              placeholder="Search Here"
              className="w-[200px] rounded-full group-hover:w-[300px] border border-gray-300 transition-all duration-300  focus:outline-none focus:border-1 px-2 py-1 focus:border-primary group-hover:border-primary focus:w-[300px] "
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button
              className="mr-2"
              onClick={() => {
                const searchProdct = productJSON.filter((data) =>
                  data?.info?.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );
                setFilteredProductJSON(searchProdct);
              }}
            >
              Test
            </button>
            <button
              className="bg-red-600 text-white p-1"
              onClick={() => {
                setFilteredProductJSON(productJSON);
                setSearchValue("");
              }}
            >
              clear
            </button>
            <div className="mx-3"><input className="border border-gray-300 rounded-md p-1" value={loggedInUser} onChange={(e)=>(setUserName(e.target.value))}/></div>
          </div>
        </div>
        <div className="container py-10">
          <div className="flex">
            <button
              className="bg-blue-500 text-white"
              onClick={() => {
                const filteredData = productJSON.filter(
                  (data) => data.info.avgRating > 4.5
                );
                console.log(filteredData);
                setFilteredProductJSON(filteredData);
              }}
            >
              Above 4 Rating
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {filteredProductJSON.map((data) => (
              <Link key={data.info.id} to={"/resturants/" + data.info.id}>
                {data.info.avgRating > 4.5 ? (
                  <HierarchyComponentCard resCard={data} />
                ) : (
                  <Productcard resCard={data} />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productlistcontainer;
