import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
  const {id, image, phone_name, brand_name, rating, price } = phone || {};
  return (
    <div className=" border-2 rounded-md p-5 mx-5 lg:mx-0">
      <img className="w-[80%] mx-auto" src={image} alt="" />
      <p className="font-bold text-gray-400">{brand_name}</p>
      <div className="flex item-center justify-between">
        <h2 className="text-2xl text-gray-400 font-bold">{phone_name}</h2>
        <h2 className="text-2xl text-gray-400 font-bold">${price}</h2>
      </div>
      <p className="font-bold text-gray-400">{rating}</p>

      <div className="text-center mt-5">
        <Link to={`/details/${id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Phone;
