import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const DetailsPhone = () => {
  const { Id } = useParams();
  const phones = useLoaderData();
  const [phone, setPhone] = useState([]);
  const { id, image, phone_name, brand_name, price } = phone || {};
  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === Id);
    setPhone(findPhone);
  }, [Id, phones]);
  // console.log(phone);

  const handleAddToFavorite = () => {
    const addFavoritePhone = [];
    const favoriteItem = JSON.parse(localStorage.getItem("favorite"));
    if (!favoriteItem) {
      addFavoritePhone.push(phone);
      localStorage.setItem("favorite", JSON.stringify(addFavoritePhone));
      swal("Good job!", "You Added Successfully!", "success");
    } else {
      const isExist = favoriteItem.find(phone => phone.id === id);
      if (!isExist) {
        addFavoritePhone.push(...favoriteItem, phone);
        localStorage.setItem("favorite", JSON.stringify(addFavoritePhone));
        swal("Good job!", "You Added Successfully!", "success");
      }
      else{
        swal("Error", "Already Added!", "error");
      }
    }
    
  };

  return (
    <div className="mt-10 ">
      <div className="relative flex w-full max-w-[48rem] mx-auto items-center flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>
          <h2 className="text-2xl text-gray-400 font-bold mb-4">
            Price: ${price}
          </h2>
          <a className="inline-block" href="#">
            <button
              onClick={handleAddToFavorite}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="text-center flex justify-center items-center gap-6 mt-10">
        <Link to={"/"}>
          <button className="btn btn-primary">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsPhone;
