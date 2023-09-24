import { useEffect, useState } from "react";
import FavoritePhones from "./FavoritePhone/FavoritePhones";

const Favorites = () => {
  const [newPhone, setNewPhone] = useState([]);
  const [noData, setNoData] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorite"));
    if (favorites) {
      const total = newPhone.reduce(
        (previous, current) => previous + current.price,
        0
      );
      setTotalPrice(total);
      setNewPhone(favorites);
    } else {
      setNoData("No Data Found");
    }
  }, [newPhone]);
  const handleDelete = () => {
    localStorage.clear();
    setNewPhone([]);
    setNoData("No Data Found");
  };
  console.log(newPhone);
  return (
    <div className="">
      <div className="text-center">
        {noData ? (
          <p className="text-1xl font-bold text-gray-500 mt-64 ">{noData}!!</p>
        ) : (
          <div></div>
        )}
      </div>
      <div className="text-center my-5">
        {newPhone.length > 0 && (
          <div>
            <button onClick={handleDelete} className="btn bg-green-300">
              Delete All Favorites
            </button>
            <h2 className="text-2xl mt-4">Total Price: ${totalPrice}</h2>
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-5 mt-14">
        {isShow
          ? newPhone.map((phone) => (
              <FavoritePhones key={phone.id} phone={phone}></FavoritePhones>
            ))
          : newPhone
              .slice(0, 4)
              .map((phone) => (
                <FavoritePhones key={phone.id} phone={phone}></FavoritePhones>
              ))}
      </div>
      <div className="text-center my-5">
        {newPhone.length > 4 && (
          <button
            onClick={() => setIsShow(!isShow)}
            className="btn bg-green-300"
          >
            {isShow ? "Show Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Favorites;
