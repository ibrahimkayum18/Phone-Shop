const FavoritePhones = ({ phone }) => {
  const { id, image, phone_name, brand_name, price } = phone || {};
  console.log(phone_name);
  return (
    <div className=" border-2 rounded-md p-5 flex justify-center items-center gap-5">
      <div className="text-left">
        <img className="" src={image} alt="" />
      </div>
      <div>
        <p className="font-bold text-gray-400">{brand_name}</p>
          <h2 className="text-2xl text-gray-400 font-bold">{phone_name}</h2>
          <h2 className="text-2xl text-gray-400 font-bold">${price}</h2>
      </div>
    </div>
  );
};

export default FavoritePhones;
